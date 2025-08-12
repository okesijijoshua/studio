
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Mock data for blog posts
const blogPosts = [
  {
    id: '1',
    title: 'The Art of Perfumery: A Journey Through Scents',
    excerpt: 'Explore the rich history and intricate process of creating the world\'s most beloved fragrances. From ancient rituals to modern chemistry...',
    date: 'October 26, 2023',
    author: 'Jane Doe',
    category: 'Perfumery',
    image: 'https://placehold.co/800x400.png',
    dataAiHint: 'perfume ingredients',
  },
  {
    id: '2',
    title: 'Finding Your Signature Scent: A Personal Guide',
    excerpt: 'Your perfume is an extension of your personality. Learn how to navigate the vast world of fragrances to find the one that truly represents you.',
    date: 'October 22, 2023',
    author: 'John Smith',
    category: 'Lifestyle',
    image: 'https://placehold.co/800x400.png',
    dataAiHint: 'person smelling perfume',
  },
  {
    id: '3',
    title: 'The Language of Notes: Top, Middle, and Base',
    excerpt: 'Ever wondered what "notes" in a perfume are? We break down the pyramid structure of a fragrance and how it evolves over time on your skin.',
    date: 'October 18, 2023',
    author: 'Aisha Bello',
    category: 'Education',
    image: 'https://placehold.co/800x400.png',
    dataAiHint: 'perfume notes diagram',
  },
    {
    id: '4',
    title: 'How to Make Your Fragrance Last All Day',
    excerpt: 'Tired of your scent fading by lunchtime? We share our top tips and tricks for extending the life of your favorite perfume.',
    date: 'October 15, 2023',
    author: 'David Chen',
    category: 'Tips & Tricks',
    image: 'https://placehold.co/800x400.png',
    dataAiHint: 'spraying perfume',
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl font-bold md:text-5xl">From the Journal</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Insights, stories, and tips from the world of fragrance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`}>
            <Card className="h-full overflow-hidden transition-shadow duration-300 hover:shadow-lg group">
              <CardHeader className="p-0">
                <div className="relative aspect-video w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={post.dataAiHint}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <Badge variant="secondary" className="mb-2">{post.category}</Badge>
                <CardTitle className="font-headline text-2xl mb-2">{post.title}</CardTitle>
                <p className="text-sm text-muted-foreground mb-4">{post.date} by {post.author}</p>
                <p className="text-muted-foreground">{post.excerpt}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
