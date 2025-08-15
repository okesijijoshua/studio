
"use client";

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';


const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  review: z.string().min(10, 'Review must be at least 10 characters.'),
  rating: z.number().min(1, "Please select a rating.").max(5),
});

type FormValues = z.infer<typeof formSchema>;


export function ReviewForm() {
    const { toast } = useToast();
    const [hoverRating, setHoverRating] = useState(0);

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            review: '',
            rating: 0,
        },
    });

    const { formState, reset, setValue, watch } = form;
    const currentRating = watch('rating');

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data);
        toast({
            title: 'Review Submitted!',
            description: 'Thank you for your feedback. We appreciate you taking the time to share your thoughts.',
        });
        reset();
    };

    return (
        <Card className="max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle className="font-headline text-2xl text-center">Leave a Review</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField control={form.control} name="name" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Full Name</FormLabel>
                                <FormControl><Input placeholder="Jane Doe" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={form.control} name="review" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Your Review</FormLabel>
                                <FormControl><Textarea placeholder="What did you think?" rows={4} {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                         <FormField control={form.control} name="rating" render={({ field }) => (
                             <FormItem>
                                <FormLabel>Rating</FormLabel>
                                <FormControl>
                                    <div className="flex items-center gap-1">
                                        {[...Array(5)].map((_, index) => {
                                            const ratingValue = index + 1;
                                            return (
                                                <Star
                                                    key={ratingValue}
                                                    className={cn(
                                                        'h-8 w-8 cursor-pointer transition-colors',
                                                        ratingValue <= (hoverRating || currentRating)
                                                            ? 'text-amber-400 fill-amber-400'
                                                            : 'text-muted-foreground'
                                                    )}
                                                    onClick={() => setValue('rating', ratingValue, { shouldValidate: true })}
                                                    onMouseEnter={() => setHoverRating(ratingValue)}
                                                    onMouseLeave={() => setHoverRating(0)}
                                                />
                                            );
                                        })}
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <Button type="submit" disabled={formState.isSubmitting} className="w-full">
                            {formState.isSubmitting ? 'Submitting...' : 'Submit Review'}
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}
