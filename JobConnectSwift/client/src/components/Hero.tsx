import { Button } from "@/components/ui/button";
import { Calendar, MessageSquare } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import heroImage from "@assets/generated_images/Job_seekers_booking_appointments_dfcafde6.png";

export default function Hero() {
  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 -z-10" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-[60%_40%] gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight" data-testid="text-hero-headline">
                Book Career Appointments{" "}
                <span className="text-primary">Instantly</span>
              </h1>
              <p className="text-lg leading-relaxed text-muted-foreground max-w-2xl" data-testid="text-hero-subheadline">
                Skip the phone calls and emails. Schedule your job search appointments in seconds with our intuitive booking platform. Get instant support through live chat.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2" data-testid="button-book-appointment">
                <Calendar className="h-5 w-5" />
                Book Appointment
              </Button>
              <Button size="lg" variant="outline" className="gap-2 backdrop-blur-sm" data-testid="button-watch-demo">
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-3 pt-4">
              <div className="flex -space-x-2">
                <Avatar className="h-8 w-8 border-2 border-background">
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <Avatar className="h-8 w-8 border-2 border-background">
                  <AvatarFallback>MK</AvatarFallback>
                </Avatar>
                <Avatar className="h-8 w-8 border-2 border-background">
                  <AvatarFallback>TL</AvatarFallback>
                </Avatar>
              </div>
              <p className="text-sm text-muted-foreground" data-testid="text-trust-indicator">
                Join 5,000+ job seekers
              </p>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src={heroImage} 
                alt="Job seekers booking appointments" 
                className="w-full h-auto object-cover rounded-lg"
                data-testid="img-hero"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
