
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react";
  
const faqs = [
    {
        question: "What types of fragrances do you offer?",
        answer: "We offer a wide range of luxury fragrances, including Perfumes and Scented Accessories. Our collection features various scent categories like Floral, Woody, Oriental, and Fresh to suit every preference."
    },
    {
        question: "Do you ship internationally?",
        answer: "Currently, we only ship within Nigeria. We are working on expanding our shipping capabilities to more countries in the future. Stay tuned for updates!"
    },
    {
        question: "What is your return policy?",
        answer: "We accept returns within 14 days of purchase, provided the product is unopened and in its original packaging. Please visit our (future) 'Returns Policy' page for more detailed information."
    },
    {
        question: "How can I track my order?",
        answer: "Once your order is shipped, you will receive an email or a text message with a driver or rider phone number where you can monitor delivery status from your end."
    },
     {
        question: "Are your products authentic?",
        answer: "Absolutely. We are an authorized retailer for all the brands we carry. We guarantee that all our products are 100% authentic and sourced directly from the manufacturers or their authorized distributors."
    }
]

export default function FaqPage() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="text-center mb-12">
                 <h1 className="font-headline text-4xl font-bold md:text-5xl flex items-center justify-center gap-2">
                    <HelpCircle className="h-10 w-10 text-primary" />
                    Frequently Asked Questions
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Find answers to common questions about our products, shipping, and policies.
                </p>
            </div>
            <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-base text-muted-foreground">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    )
}
