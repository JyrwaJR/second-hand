import React from 'react';
import { Card, CardContent } from './ui/card';

const features = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-12 h-12 mb-4 text-primary"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    title: "Reliable Customer Service",
    description:
      "Our dedicated support team is here to ensure your questions are answered and your needs are met around the clock.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-12 h-12 mb-4 text-primary"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
    title: "Easy Returns",
    description:
      "Not satisfied with your purchase? Our hassle-free return policy makes it easy to get exactly what you want.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-12 h-12 mb-4 text-primary"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
    title: "Secure Checkout",
    description:
      "Shop with confidence. Our secure checkout keeps your information safe and private. Security first platform.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="w-full mt-10">
      <div className="container px-4 md:px-6">
      <h2 className="text-2xl font-extrabold text-center text-gray-900 mb-10 lg:mb-16">
          Our Features
        </h2>
        <div className="grid gap-6 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index}>
              <Card>
                <CardContent className="p-6">
                  {feature.icon}
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
