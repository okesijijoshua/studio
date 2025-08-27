
"use client";

import { useState, useEffect } from 'react';
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
import { Separator } from '@/components/ui/separator';
import { Truck, CreditCard, Info } from 'lucide-react';
import { getShippingCost, abujaLocalPrices, abujaLocations, nigeriaStates } from '@/lib/shipping';
import { usePaystackPayment } from 'react-paystack';
import { GLOBAL_DISCOUNT } from '@/lib/config';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const formSchema = z.object({
  fullName: z.string().min(3, 'Full name must be at least 3 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  phone: z.string().min(10, 'Please enter a valid phone number.'),
  address: z.string().min(10, 'Please enter a valid delivery address.').optional(),
  city: z.string().min(2, 'Please enter a city.').optional(),
  abujaLocation: z.string().optional(),
  stateLocation: z.string().optional(),
}).refine(data => data.abujaLocation || data.stateLocation, {
    message: "Please select a delivery location.",
    path: ['abujaLocation'], // you can assign the error to one of the fields
});

type FormValues = z.infer<typeof formSchema>;

export default function CheckoutPage() {
  const { toast } = useToast();
  const { cartItems, totalPrice, totalItems, clearCart } = useCart();
  const { formatPrice, currency, isMounted } = useCurrency();
  const [selectedState, setSelectedState] = useState<string>('');
  const [formValues, setFormValues] = useState<FormValues | null>(null);
  const [isLocalDelivery, setIsLocalDelivery] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      abujaLocation: '',
      stateLocation: '',
    },
  });
  
  const { formState, reset, trigger, setValue, watch, getValues } = form;
  const watchedAbujaLocation = watch('abujaLocation');
  const watchedStateLocation = watch('stateLocation');

  useEffect(() => {
    const location = watchedAbujaLocation || watchedStateLocation;
    setSelectedState(location || '');
    
    const isLocal = !!watchedAbujaLocation;
    setIsLocalDelivery(isLocal);

    if (!isLocal) {
        setValue('address', 'N/A');
        setValue('city', 'N/A');
    } else {
        if (getValues('address') === 'N/A') {
            setValue('address', '');
        }
        if (getValues('city') === 'N/A') {
            setValue('city', '');
        }
    }
  }, [watchedAbujaLocation, watchedStateLocation, setValue, getValues]);
  
  const shippingCost = getShippingCost(selectedState);
  const finalTotal = totalPrice + (shippingCost || 0);

  const paystackConfig = {
      reference: (new Date()).getTime().toString(),
      email: formValues?.email || '',
      amount: finalTotal * 100, // Paystack amount is in kobo
      publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || '',
  };

  const initializePayment = usePaystackPayment(paystackConfig);

  const onPaymentSuccess = (reference: any) => {
    console.log('Payment successful:', reference);
    toast({
      title: 'Payment Successful!',
      description: 'Your order has been placed. We will process it shortly.',
    });
    clearCart();
    reset();
    setFormValues(null);
  };

  const onPaymentClose = () => {
    console.log('Payment closed');
    toast({
        title: 'Payment Canceled',
        description: 'The payment process was not completed.',
        variant: 'destructive',
    });
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setFormValues(data);
    initializePayment(onPaymentSuccess, onPaymentClose);
  };

  const handleProceedToPayment = async () => {
    const isValid = await trigger();
    if (isValid) {
        form.handleSubmit(onSubmit)();
    }
  }


  if (totalItems === 0 && !formState.isSubmitSuccessful) {
    return (
        <div className="container mx-auto py-16 md:py-24 text-center">
            <h1 className="font-headline text-3xl">Your Cart is Empty</h1>
            <p className="mt-4 text-muted-foreground">You can't proceed to checkout without any items.</p>
            <Button asChild className="mt-6">
                <a href="/collections">Start Shopping</a>
            </Button>
        </div>
    )
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
                                    <FormLabel>Location (Within FCT-Abuja)</FormLabel>
                                    <Select onValueChange={(value) => { field.onChange(value); setValue('stateLocation', ''); }} value={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select Abuja Area" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent position="popper">
                                            {abujaLocations.map(location => <SelectItem key={location} value={location}>{location}</SelectItem>)}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )} />
                             <FormField control={form.control} name="stateLocation" render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Location (Outside FCT-Abuja)</FormLabel>
                                    <Select onValueChange={(value) => { field.onChange(value); setValue('abujaLocation', ''); }} value={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select State" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent position="popper">
                                            {nigeriaStates.map(location => <SelectItem key={location} value={location}>{location}</SelectItem>)}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )} />
                        </div>
                        
                         {!isLocalDelivery && selectedState && (
                            <Alert>
                                <Info className="h-4 w-4" />
                                <AlertTitle>Interstate Delivery</AlertTitle>
                                <AlertDescription>
                                    Deliveries to {selectedState} will be sent to a central park/hub for pickup.
                                </AlertDescription>
                            </Alert>
                        )}
                        
                        <FormField control={form.control} name="city" render={({ field }) => (
                            <FormItem>
                                <FormLabel>City</FormLabel>
                                <FormControl>
                                    <Input placeholder="Lekki" {...field} disabled={!isLocalDelivery} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <FormField control={form.control} name="address" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Street Address</FormLabel>
                                <FormControl>
                                    <Input placeholder="123, Luxe Avenue" {...field} disabled={!isLocalDelivery} />
                                </FormControl>
                                {isLocalDelivery && <FormDescription>Street address is only for deliveries within Abuja.</FormDescription>}
                                <FormMessage />
                            </FormItem>
                        )} />

                         <Button type="button" onClick={handleProceedToPayment} disabled={formState.isSubmitting || totalItems === 0 || !selectedState} className="w-full text-base sm:text-lg py-4">
                            {formState.isSubmitting ? 'Processing...' : `Proceed to Payment - ${!isMounted || !formattedFinalTotal ? "Calculating..." : formattedFinalTotal}`}
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
                        )
                    })}
                </div>
                <Separator className="my-6" />
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <p className="text-muted-foreground">Subtotal</p>
                        <p className="font-medium">{formatPrice(totalPrice)}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-muted-foreground">Shipping</p>
                        <p className="font-medium">{isMounted && shippingCost ? formatPrice(shippingCost) : 'Select a location'}</p>
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
