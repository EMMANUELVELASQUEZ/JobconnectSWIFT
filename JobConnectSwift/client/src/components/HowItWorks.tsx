import { Card } from "@/components/ui/card";
import { Calendar, Clock, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const steps = [
  {
    icon: Calendar,
    step: "1",
    title: "Choose Your Date",
    description: "Browse the calendar and select a date that works for your schedule."
  },
  {
    icon: Clock,
    step: "2",
    title: "Pick a Time",
    description: "View available time slots and choose the one that fits your day."
  },
  {
    icon: CheckCircle,
    step: "3",
    title: "Confirm & Done",
    description: "Enter your details, confirm your appointment, and receive instant confirmation."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full py-20 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold" data-testid="text-how-it-works-heading">
            Book in Three Simple Steps
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-how-it-works-subheading">
            Our streamlined process gets you booked in minutes, not hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative" data-testid={`card-step-${index}`}>
              <Card className="p-8 h-full">
                <div className="space-y-4">
                  <div className="relative inline-block">
                    <div className="h-16 w-16 rounded-md bg-primary/10 flex items-center justify-center">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <Badge className="absolute -top-2 -right-2 h-6 w-6 p-0 flex items-center justify-center rounded-full">
                      {step.step}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-semibold" data-testid={`text-step-title-${index}`}>
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground" data-testid={`text-step-desc-${index}`}>
                    {step.description}
                  </p>
                </div>
              </Card>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
