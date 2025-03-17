import { StarIcon } from 'lucide-react';
import React from 'react';
import { Card, CardContent } from './ui/card';

const testimonials = [
  {
    text: "Easy UI has revolutionized my online shopping experience. The variety of products and ease of use are unmatched!",
    author: "Sarah J.",
  },
  {
    text: "I love the deals and the customer service is top-notch. Easy UI is my go-to for all my shopping needs.",
    author: "Mike T.",
  },
  {
    text: "Fast shipping and great prices. Easy UI has made online shopping a breeze for me! Easy UI is my fav.",
    author: "Emily R.",
  },
];

const TestimonialSection = () => (
  <section className="w-full mt-0 pb-0">
    <div className="container px-4 md:px-6">
    <h2 className="text-2xl font-extrabold text-center text-gray-900 mb-16">
        What Our Customers Say
      </h2>
      <div className="grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <Card>
              <CardContent className="p-6">
                <div className="flex space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 fill-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  {testimonial.text}
                </p>
                <p className="font-semibold">- {testimonial.author}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialSection;
