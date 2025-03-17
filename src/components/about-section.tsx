import React from 'react';

const AboutSection = React.forwardRef((props, ref) => (
  <section
//   @ts-ignore
    ref={ref}
    className="w-full py-12 md:py-24 lg:py-32 bg-muted"
  >
    <div className="container px-4 md:px-6">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
        About Easy UI
      </h2>
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-muted-foreground mb-6">
          At Easy UI, we believe in the power of intuitive design and
          seamless user experiences. Our mission is to revolutionize the way
          people interact with software, making it more accessible,
          efficient, and enjoyable.
        </p>
        <p className="text-muted-foreground mb-6">
          Founded by a team of passionate UI/UX designers and developers,
          Easy UI is committed to delivering software solutions that not
          only meet your needs but exceed your expectations. We understand
          that in today's fast-paced digital world, ease of use is
          paramount.
        </p>
        <p className="text-muted-foreground">
          Our curated selection of SaaS products embodies our philosophy of
          user-centric design. Whether you're looking for marketing tools,
          design software, or cutting-edge AI solutions, we ensure that
          every product in our catalog adheres to the highest standards of
          usability and aesthetic appeal.
        </p>
      </div>
    </div>
  </section>
));

export default AboutSection;
