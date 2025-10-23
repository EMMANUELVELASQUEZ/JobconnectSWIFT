# Design Guidelines: Job Seeker Appointment Booking Platform

## Design Approach

**Hybrid System-Reference Approach**: Draw inspiration from modern SaaS booking platforms (Calendly, Cal.com) for the appointment interface, professional platforms (LinkedIn) for job seeker profiles, and contemporary chat solutions (Intercom, Drift) for live chat. Foundation based on Material Design principles with custom enhancements for booking workflows.

**Core Design Principles**:
- Trust & Professionalism: Clean, credible design that job seekers feel confident using
- Efficiency: Streamlined booking flow with minimal friction
- Accessibility: Clear visual hierarchy and immediate chat support availability
- Modern SaaS Aesthetic: Contemporary web application feel

## Typography

**Font Stack**:
- Primary: 'Inter' (body text, UI elements, forms)
- Headings: 'Inter' with varied weights (600-700 for impact)
- Monospace: 'Roboto Mono' (time displays, appointment codes)

**Scale**:
- Hero Headline: text-5xl md:text-6xl font-bold
- Section Headings: text-3xl md:text-4xl font-semibold
- Subsection Headings: text-2xl font-semibold
- Body Large: text-lg leading-relaxed
- Body Standard: text-base leading-normal
- Body Small: text-sm
- UI Labels: text-sm font-medium uppercase tracking-wide
- Micro Copy: text-xs

## Layout System

**Spacing Primitives**: Use Tailwind units of 2, 4, 6, 8, 12, 16, and 24 for consistent rhythm
- Component internal spacing: p-4, p-6, p-8
- Section padding: py-16, py-20, py-24
- Gap utilities: gap-4, gap-6, gap-8
- Card spacing: p-6 md:p-8

**Grid Strategy**:
- Desktop: 3-column max for features, 2-column for booking flow
- Tablet: 2-column for content, single column for forms
- Mobile: Single column throughout

**Container Widths**:
- Full-width hero: w-full with max-w-7xl inner container
- Main content: max-w-6xl
- Booking calendar: max-w-4xl
- Form containers: max-w-2xl
- Chat widget: Fixed width 380px

## Core Components

**Navigation Header**:
- Sticky top navigation with elevated shadow on scroll
- Logo left, primary navigation center, CTA button right
- Mobile: Hamburger menu with slide-in drawer
- Height: h-16 md:h-20
- Elements: Logo, "How It Works", "Features", "Sign In", "Book Now" (primary button)

**Hero Section** (h-auto, not forced viewport):
- Two-column layout: Left 60% text content, Right 40% hero image
- Headline + subheadline + dual CTA (primary "Book Appointment", secondary "Watch Demo")
- Trust indicators below CTAs: "Join 5,000+ job seekers" with small avatar stack
- Background: Subtle gradient overlay, minimal geometric shapes
- Hero image: Professional job seeker in modern office setting or diverse professionals collaborating

**Appointment Booking Calendar**:
- Large interactive calendar grid with available slots highlighted
- Month view with clear date selection
- Time slot picker displayed as cards (e.g., "9:00 AM", "10:30 AM")
- Selected state: Elevated card with subtle animation
- Sidebar summary showing selected date/time with appointment details form
- Progress indicator: Step 1: Date → Step 2: Time → Step 3: Details → Step 4: Confirm

**Job Seeker Profile Card**:
- Compact horizontal layout: Avatar (80x80) left, info right
- Name (text-xl font-semibold), job interests (text-sm), contact badge
- Edit button top-right corner
- Background: Subtle surface elevation with border

**Live Chat Widget**:
- Fixed bottom-right position (bottom-6 right-6)
- Collapsed state: Circular FAB with chat icon and notification badge
- Expanded: 380px × 600px card with header, message list, input
- Message bubbles: User messages right-aligned, support left-aligned
- Typing indicator with animated dots
- Quick reply suggestions as pill buttons
- Minimize/close controls in header

**Feature Cards Grid**:
- 3-column grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Each card: Icon top (56×56), heading, description
- Icons: Use Heroicons via CDN
- Features: "No Phone Calls", "Instant Booking", "Live Support", "Calendar Sync", "Email Reminders", "Easy Rescheduling"
- Card padding: p-8
- Hover: Subtle lift effect (translate-y-1)

**Appointment Dashboard**:
- Table layout for desktop, card stack for mobile
- Columns: Date/Time, Job Interest, Status (badge), Actions
- Status badges: Confirmed (success), Pending (warning), Cancelled (neutral)
- Action buttons: View Details, Reschedule, Cancel
- Empty state: Illustration with "No appointments yet" + CTA

**Forms**:
- Floating label inputs with bottom border (no full border by default)
- Focus state: Thicker bottom border with smooth transition
- Input fields: h-12, px-4
- Textarea: min-h-32
- Submit buttons: Full width on mobile, inline on desktop
- Validation: Inline error messages below fields with icon

**CTA Sections**:
- Centered layout with gradient background
- Heading + supporting text + primary button
- Social proof element: "4.9/5 stars from 1,200+ users"
- Optional: Testimonial quote with author

**Footer**:
- 4-column grid: About, Features, Support, Legal
- Newsletter signup: Email input + button combo
- Social icons row (LinkedIn, Twitter, Facebook)
- Trust badges: "Secure Booking", "GDPR Compliant"
- Copyright notice and links

## Images

**Hero Image**: Professional scene - job seeker reviewing calendar on laptop in modern co-working space, or diverse professionals in consultation meeting. Natural lighting, contemporary aesthetic. Position: Right side of hero, 40% width, aligned top.

**Feature Section Icons**: Use Heroicons for calendar, chat, bell, sync icons (64×64, displayed at 56×56)

**Testimonial Section**: 3-4 authentic headshots of diverse job seekers (circular crop, 80×80)

**Empty States**: Friendly illustration for empty appointment dashboard - calendar with checkmark

**Background Elements**: Subtle abstract shapes or dots pattern in hero and CTA sections, low opacity

## Accessibility & Interactions

- Focus rings: 2px solid ring with offset
- Button states: Clear hover (slight scale/opacity), active (pressed effect)
- Loading states: Skeleton screens for calendar, spinner for form submissions
- Toast notifications: Top-right for confirmations, 4-second auto-dismiss
- Modal overlays: Backdrop blur with centered dialog, max-w-2xl
- Smooth scroll behavior for anchor links
- Keyboard navigation support throughout

## Animations (Minimal)

- Page transitions: Fade in on load
- Calendar date selection: Quick scale animation
- Chat widget: Slide up from bottom when opened
- Button hovers: Subtle transform translateY(-2px)
- Toast notifications: Slide in from top
- No parallax, no continuous animations, no scroll-triggered effects