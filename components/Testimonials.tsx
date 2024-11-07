import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Sparkling Clean Homes",
    review: "I've been using this cleaning service for over a year and they are absolutely fantastic. Their attention to detail and thorough cleaning leaves my home looking brand new every time."
  },
  {
    name: "Michael Lee",
    company: "Kanke General Hospital",
    review: "Hands down the best cleaning service I've ever used. They are reliable, efficient, and do an incredible job. I highly recommend them to anyone looking for a trustworthy and professional cleaning team."
  },
  {
    name: "Emily Chen",
    company: "Hotstuff Restaurant",
    review: "I'm so impressed with the level of service from this cleaning company. They are always on time, go above and beyond, and make my restaurant look spotless. I couldn't be happier with their work."
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="w-full py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Customers Review</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{testimonial.name}</CardTitle>
                <CardDescription>{testimonial.company}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="italic">"{testimonial.review}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;