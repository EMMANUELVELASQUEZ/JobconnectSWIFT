import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import BookingCalendar from "@/components/BookingCalendar";
import { Badge } from "@/components/ui/badge";

export default function BookAppointment() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Badge>Step 1 of 3</Badge>
              </div>
              <h1 className="text-3xl md:text-4xl font-semibold" data-testid="text-booking-heading">
                Select Your Appointment Time
              </h1>
              <p className="text-muted-foreground text-lg" data-testid="text-booking-subheading">
                Choose a date and time that works best for your schedule.
              </p>
            </div>

            <BookingCalendar />
          </div>
        </div>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
