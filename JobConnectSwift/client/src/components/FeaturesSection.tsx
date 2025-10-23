import FeatureCard from "./FeatureCard";
import { PhoneOff, Calendar, MessageSquare, RefreshCw, Bell, FolderSync } from "lucide-react";

const features = [
  {
    icon: PhoneOff,
    title: "No Phone Calls",
    description: "Book appointments entirely online without the hassle of phone tag or waiting on hold.",
  },
  {
    icon: Calendar,
    title: "Instant Booking",
    description: "See available time slots in real-time and secure your appointment in just a few clicks.",
  },
  {
    icon: MessageSquare,
    title: "Live Support",
    description: "Get instant answers to your questions through our integrated live chat feature.",
  },
  {
    icon: FolderSync,
    title: "Calendar FolderSync",
    description: "Automatically sync appointments with your Google Calendar or Outlook for easy tracking.",
  },
  {
    icon: Bell,
    title: "Email Reminders",
    description: "Receive timely email reminders so you never miss an important appointment.",
  },
  {
    icon: RefreshCw,
    title: "Easy Rescheduling",
    description: "Need to change your appointment? Reschedule with just a few clicks, no calls needed.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="w-full py-20 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold" data-testid="text-features-heading">
            Everything You Need to Book Smarter
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-features-subheading">
            Our platform streamlines the appointment booking process with powerful features designed for job seekers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
