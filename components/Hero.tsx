import React from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section className="w-full py-20 text-center bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to Global Education Institute</h1>
        <p className="text-xl mb-8">Expert coaching for IELTS Academic, IELTS Professional, and PTE Academic</p>
        <Button 
          size="lg" 
          variant="outline" 
          className="border-2 border-primary-foreground bg-primary-foreground text-primary"
          asChild
        >
          <a href="#enquiry">Enroll Now</a>
        </Button>
      </div>
    </section>
  );
};

export default Hero;