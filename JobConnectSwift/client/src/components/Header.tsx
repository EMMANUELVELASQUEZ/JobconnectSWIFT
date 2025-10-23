import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-4 md:px-6">
        <Link href="/">
          <a className="flex items-center gap-2 hover-elevate active-elevate-2 rounded-md px-2 py-1 -ml-2" data-testid="link-home">
            <Calendar className="h-6 w-6 text-primary" />
            <span className="text-xl font-semibold">JobConnect</span>
          </a>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="#features">
            <a className="text-sm font-medium hover-elevate active-elevate-2 px-3 py-2 rounded-md" data-testid="link-features">
              Features
            </a>
          </Link>
          <Link href="#how-it-works">
            <a className="text-sm font-medium hover-elevate active-elevate-2 px-3 py-2 rounded-md" data-testid="link-how-it-works">
              How It Works
            </a>
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="hidden md:inline-flex" data-testid="button-sign-in">
            Sign In
          </Button>
          <Link href="/book">
            <a data-testid="link-book-now">
              <Button size="sm" data-testid="button-book-now">
                Book Now
              </Button>
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}
