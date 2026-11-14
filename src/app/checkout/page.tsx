"use client";

import { useState, useEffect, useRef } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useCart } from '@/hooks/use-cart';
import { useCurrency } from '@/hooks/use-currency';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { useSearchParams, useRouter } from 'next/navigation';
import { Truck, CreditCard, Info, MapPin, CheckCircle } from 'lucide-react';
import { getShippingCost, abujaLocations, nigeriaStates } from '@/lib/shipping';
// Removed legacy Paystack client integration – server‑side init will be used

import { GLOBAL_DISCOUNT } from '@/lib/config';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';


const formSchema = z.object({
  fullName: z.string().min(3, 'Full name must be at least 3 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  phone: z.string().min(10, 'Please enter a valid phone number.'),
  address: z.string().optional(),
  abujaLocation: z.string().optional(),
  stateLocation: z.string().optional(),
}).refine(data => data.abujaLocation || data.stateLocation, {
    message: "Please select a delivery location.",
    path: ['abujaLocation'], 
}).refine(data => {
    // If an Abuja location is selected, address is required
    if (data.abujaLocation) {
        return !!data.address && data.address.trim().length >= 5;
    }
    return true;
}, {
    message: "Please enter your street address or landmark.",
    path: ["address"],
});

type FormValues = z.infer<typeof formSchema>;

export default function CheckoutPage() {
  const { toast } = useToast();
  const { cartItems, totalPrice, totalItems, clearCart } = useCart();
  const { formatPrice, isMounted } = useCurrency();
  const [selectedState, setSelectedState] = useState<string>('');
  const [isLocalDelivery, setIsLocalDelivery] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      address: '',
      abujaLocation: '',
      stateLocation: '',
    },
  });

  const { formState, reset, trigger, setValue, watch, getValues } = form;
  
  // State for payment verification UI
  const [verifying, setVerifying] = useState(false);
  const [verifyError, setVerifyError] = useState<string | null>(null);
  const verifiedRef = useRef(false);

  const watchedAbujaLocation = watch('abujaLocation');
  const watchedStateLocation = watch('stateLocation');

  useEffect(() => {
    const location = watchedAbujaLocation || watchedStateLocation;
    setSelectedState(location || '');
    
    const isLocal = !!watchedAbujaLocation;
    setIsLocalDelivery(isLocal);

    if (!isLocal && watchedStateLocation) {
        setValue('address', 'N/A');
    } else {
        if (getValues('address') === 'N/A') {
            setValue('address', '');
        }
    }
  }, [watchedAbujaLocation, watchedStateLocation, setValue, getValues]);
  
  // Calculate delivery fee
  const shippingCost: number | null = selectedState ? getShippingCost(selectedState) : null;
  const finalTotal = totalPrice + (shippingCost || 0);

  // Payment verification after Paystack redirect is handled via useEffect below.


    



// Server‑side payment initialization
  const handleProceedToPayment = async () => {
    const isValid = await trigger();
    if (!isValid) return;
    const values = getValues();
    const payload = {
      customer: {
        fullName: values.fullName,
        email: values.email,
        phone: values.phone,
        address: values.address,
        abujaLocation: values.abujaLocation,
        stateLocation: values.stateLocation,
      },
      cart: cartItems.map(item => ({ product: { id: item.product.id }, quantity: item.quantity })),
    };
    try {
      const res = await fetch('/api/orders/init', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || 'Order initialization failed');
      // Redirect to Paystack authorization URL
      window.location.href = data.authorization_url;
    } catch (err: any) {
      toast({
        title: 'Payment Initialization Failed',
        description: err.message || 'Unable to start payment.',
        variant: 'destructive',
      });
    }
  };

  // Verify payment when returning from Paystack
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const reference = params.get('reference');
    if (!reference) return;
    // Prevent duplicate verification attempts
    if (verifying) return;
    const verifyPayment = async () => {
      try {
        setVerifying(true);
        const res = await fetch('/api/orders/confirm', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ reference }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data?.message || 'Verification failed');
        // Ensure we only process successful verification once
        if (!verifiedRef.current) {
          toast({
            title: 'Payment Successful!',
            description: 'Your order has been placed and we will process it shortly.',
          });
          clearCart();
          reset();
          verifiedRef.current = true;
        }
        // Clean URL to remove reference param
        const cleanUrl = window.location.origin + window.location.pathname;
        window.history.replaceState({}, '', cleanUrl);
      } catch (err: any) {
        setVerifyError(err.message || 'Unable to verify payment.');
        toast({
          title: 'Payment Verification Failed',
          description: err.message || 'Unable to verify payment.',
          variant: 'destructive',
        });
      } finally {
        setVerifying(false);
      }
    };
    verifyPayment();
  }, []);

  // Remove client‑side Paystack hooks and config
  // const config = { ... };
  // const initializePayment = usePaystackPayment(config);
  // const onSubmit: SubmitHandler<FormValues> = () => { initializePayment(onPaymentSuccess, onPaymentClose); };


  if (totalItems === 0 && !formState.isSubmitSuccessful) {
    return (
        <div className="container mx-auto py-16 md:py-24 text-center">
            <h1 className="font-headline text-3xl">Your Cart is Empty</h1>
            <p className="mt-4 text-muted-foreground">You can't proceed to checkout without any items.</p>
            <Button asChild className="mt-6">
                <a href="/collections">Start Shopping</a>
            </Button>
        </div>
    );
  }
  
  const formattedFinalTotal = formatPrice(finalTotal);

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl font-bold md:text-5xl flex items-center justify-center gap-2">
            <CreditCard className="h-10 w-10 text-primary" />
            Checkout
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Complete your order by providing your delivery details below.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Shipping Details Form */}
        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center gap-2">
                    <Truck className="h-6 w-6" />
                    Delivery Information
                </CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                        <FormField control={form.control} name="fullName" render={({ field }) => (
                            <FormItem><FormLabel>Full Name</FormLabel><FormControl><Input placeholder="John Doe" {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField control={form.control} name="email" render={({ field }) => (
                                <FormItem><FormLabel>Email Address</FormLabel><FormControl><Input type="email" placeholder="john.doe@example.com" {...field} /></FormControl><FormMessage /></FormItem>
                            )} />
                            <FormField control={form.control} name="phone" render={({ field }) => (
                                <FormItem><FormLabel>Phone Number</FormLabel><FormControl><Input type="tel" placeholder="08012345678" {...field} /></FormControl><FormMessage /></FormItem>
                            )} />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField control={form.control} name="abujaLocation" render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="flex items-center gap-1.5 font-semibold">
                                        <MapPin className="h-4 w-4 text-primary" />
                                        Within Abuja (FCT)
                                    </FormLabel>
                                    <Select 
                                        onValueChange={(value) => { 
                                          field.onChange(value); 
                                          setValue('stateLocation', ''); 
                                        }} 
                                        value={field.value || ''}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select Your Area" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent position="popper">
                                            {abujaLocations.map(location => (
                                              <SelectItem key={location} value={location}>{location}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )} />

                             <FormField control={form.control} name="stateLocation" render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="font-semibold text-muted-foreground">Outside Abuja (Other States)</FormLabel>
                                    <Select 
                                        onValueChange={(value) => { 
                                          field.onChange(value); 
                                          setValue('abujaLocation', ''); 
                                        }} 
                                        value={field.value || ''}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select State" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent position="popper">
                                            {nigeriaStates.map(location => (
                                              <SelectItem key={location} value={location}>{location}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )} />
                        </div>

                        {/* Instant Price Notification Banner */}
                        {selectedState && shippingCost !== null && (
                          <div className="flex items-center justify-between rounded-md border border-primary/20 bg-primary/5 p-3 text-sm">
                            <div className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                              <span className="font-medium text-foreground">
                                {isLocalDelivery ? `Delivery to ${selectedState}` : `Interstate Delivery to ${selectedState}`}
                              </span>
                            </div>
                            <span className="font-bold text-primary text-base">
                              {formatPrice(shippingCost)}
                            </span>
                          </div>
                        )}
                        
                        {!isLocalDelivery && selectedState && (
                            <Alert>
                                <Info className="h-4 w-4" />
                                <AlertTitle>Interstate Delivery</AlertTitle>
                                <AlertDescription>
                                    Deliveries outside Abuja are dispatched safely to a central park/hub for pickup.
                                </AlertDescription>
                            </Alert>
                        )}
                        
                        <FormField control={form.control} name="address" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Detailed Delivery Address / Landmark</FormLabel>
                                <FormControl>
                                    <Input 
                                      placeholder={isLocalDelivery ? "e.g., House 14, 4th Avenue, Phase 2, Lugbe" : "N/A (Park Pickup)"} 
                                      {...field} 
                                      disabled={!isLocalDelivery} 
                                    />
                                </FormControl>
                                {isLocalDelivery && (
                                  <FormDescription>
                                    Enter your street address, estate, building number, or nearest landmark.
                                  </FormDescription>
                                )}
                                <FormMessage />
                            </FormItem>
                        )} />

                         <Button 
                            type="button" 
                            onClick={handleProceedToPayment} 
                            disabled={formState.isSubmitting || totalItems === 0 || !selectedState} 
                            className="w-full text-base sm:text-lg py-3 h-auto"
                         >
                            {formState.isSubmitting 
                              ? 'Processing...' 
                              : `Proceed to Payment - ${!isMounted || !formattedFinalTotal ? "Calculating..." : formattedFinalTotal}`
                            }
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>

        {/* Order Summary */}
        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-2xl">Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {cartItems.map(item => {
                        const activeDiscount = item.product.discount ?? GLOBAL_DISCOUNT;
                        const originalPrice = item.product.price;
                        const discountedPrice = activeDiscount > 0 ? originalPrice - (originalPrice * activeDiscount / 100) : originalPrice;
                        
                        return (
                            <div key={item.product.id} className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <Image src={item.product.image} alt={item.product.name} width={60} height={60} className="rounded-md" />
                                    <div>
                                        <p className="font-semibold">{item.product.name}</p>
                                        <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-medium">{formatPrice(discountedPrice * item.quantity)}</p>
                                    {activeDiscount > 0 && (
                                        <p className="text-sm text-muted-foreground line-through">{formatPrice(originalPrice * item.quantity)}</p>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
                <Separator className="my-6" />
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <p className="text-muted-foreground">Subtotal</p>
                        <p className="font-medium">{formatPrice(totalPrice)}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-muted-foreground">Shipping</p>
                        <p className="font-medium">
                          {isMounted && shippingCost !== null ? formatPrice(shippingCost) : 'Select location'}
                        </p>
                    </div>
                </div>
                <Separator className="my-6" />
                <div className="flex justify-between font-bold text-xl">
                    <p>Total</p>
                    <p>{isMounted && formattedFinalTotal ? formattedFinalTotal : 'Calculating...'}</p>
                </div>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
