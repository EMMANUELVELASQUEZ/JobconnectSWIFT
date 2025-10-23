import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="p-8 hover-elevate transition-transform" data-testid={`card-feature-${title.toLowerCase().replace(/\s/g, '-')}`}>
      <div className="space-y-4">
        <div className="h-14 w-14 rounded-md bg-primary/10 flex items-center justify-center">
          <Icon className="h-7 w-7 text-primary" />
        </div>
        <h3 className="text-2xl font-semibold" data-testid={`text-feature-title-${title.toLowerCase().replace(/\s/g, '-')}`}>
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed" data-testid={`text-feature-desc-${title.toLowerCase().replace(/\s/g, '-')}`}>
          {description}
        </p>
      </div>
    </Card>
  );
}
