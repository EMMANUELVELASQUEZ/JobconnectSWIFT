import { Calendar } from "lucide-react";
import { SiLinkedin, SiX, SiFacebook } from "react-icons/si";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-6 w-6 text-primary" />
              <span className="text-xl font-semibold">JobConnect</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Simplifying appointment booking for job seekers everywhere.
            </p>
            <div className="flex gap-3">
              <a href="#" className="hover-elevate active-elevate-2 rounded-md p-2" data-testid="link-linkedin">
                <SiLinkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover-elevate active-elevate-2 rounded-md p-2" data-testid="link-twitter">
                <SiX className="h-5 w-5" />
              </a>
              <a href="#" className="hover-elevate active-elevate-2 rounded-md p-2" data-testid="link-facebook">
                <SiFacebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Features</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover-elevate active-elevate-2 inline-block px-1 rounded" data-testid="link-instant-booking">Instant Booking</a></li>
              <li><a href="#" className="hover-elevate active-elevate-2 inline-block px-1 rounded" data-testid="link-live-chat">Live Chat Support</a></li>
              <li><a href="#" className="hover-elevate active-elevate-2 inline-block px-1 rounded" data-testid="link-calendar-sync">Calendar Sync</a></li>
              <li><a href="#" className="hover-elevate active-elevate-2 inline-block px-1 rounded" data-testid="link-reminders">Email Reminders</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover-elevate active-elevate-2 inline-block px-1 rounded" data-testid="link-help-center">Help Center</a></li>
              <li><a href="#" className="hover-elevate active-elevate-2 inline-block px-1 rounded" data-testid="link-contact">Contact Us</a></li>
              <li><a href="#" className="hover-elevate active-elevate-2 inline-block px-1 rounded" data-testid="link-faq">FAQ</a></li>
              <li><a href="#" className="hover-elevate active-elevate-2 inline-block px-1 rounded" data-testid="link-status">System Status</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Stay Updated</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Get tips and updates delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <Input placeholder="Your email" type="email" data-testid="input-newsletter-email" />
              <Button data-testid="button-subscribe">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground" data-testid="text-copyright">
              © 2025 JobConnect. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover-elevate active-elevate-2 px-1 rounded" data-testid="link-privacy">Privacy Policy</a>
              <a href="#" className="hover-elevate active-elevate-2 px-1 rounded" data-testid="link-terms">Terms of Service</a>
              <a href="#" className="hover-elevate active-elevate-2 px-1 rounded" data-testid="link-cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
