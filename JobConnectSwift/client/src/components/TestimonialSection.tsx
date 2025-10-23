import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import testimonial1 from "@assets/generated_images/Professional_testimonial_headshot_woman_81d437e8.png";
import testimonial2 from "@assets/generated_images/Professional_testimonial_headshot_man_2a083895.png";
import testimonial3 from "@assets/generated_images/Professional_testimonial_headshot_senior_5673fefb.png";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Software Developer",
    image: testimonial1,
    quote: "JobConnect made scheduling my career counseling sessions so easy. No more back-and-forth emails!",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Marketing Manager",
    image: testimonial2,
    quote: "The live chat feature is incredibly helpful. I got answers to my questions instantly while booking.",
    rating: 5
  },
  {
    name: "Patricia Williams",
    role: "HR Consultant",
    image: testimonial3,
    quote: "This platform saved me hours. Booking appointments is now as simple as a few clicks.",
    rating: 5
  }
];

export default function TestimonialSection() {
  return (
    <section className="w-full py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold" data-testid="text-testimonials-heading">
            What Job Seekers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-testimonials-subheading">
            Join thousands of satisfied users who've simplified their appointment booking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 space-y-4" data-testid={`card-testimonial-${index}`}>
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-muted-foreground italic" data-testid={`text-testimonial-quote-${index}`}>
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-3 pt-2">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-sm" data-testid={`text-testimonial-name-${index}`}>
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground" data-testid={`text-testimonial-role-${index}`}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
