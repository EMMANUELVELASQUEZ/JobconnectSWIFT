import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export default function CTASection() {
  return (
    <section className="w-full py-20 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 -z-10" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold" data-testid="text-cta-heading">
              Ready to Simplify Your Job Search?
            </h2>
            <p className="text-lg text-muted-foreground" data-testid="text-cta-subheading">
              Join thousands of job seekers who've eliminated the hassle of scheduling appointments.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" data-testid="button-cta-book">
              Book Your First Appointment
            </Button>
            <Button size="lg" variant="outline" data-testid="button-cta-learn">
              Learn More
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2 pt-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground" data-testid="text-cta-rating">
              4.9/5 stars from 1,200+ users
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
