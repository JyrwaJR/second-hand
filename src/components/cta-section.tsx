import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const CTASignUpSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 ">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Start Shopping Today
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join millions of satisfied customers and experience the
              convenience of Easy UI. Sign up now and get 10% off your first
              purchase!
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form className="flex space-x-2">
              <Input
                className="max-w-lg flex-1"
                placeholder="Enter your email"
                type="email"
              />
              <Button type="submit">Sign Up</Button>
            </form>
            <p className="text-xs text-muted-foreground">
              By signing up, you agree to our{" "}
              <a className="underline underline-offset-2" href="#">
                Terms & Conditions
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASignUpSection;
