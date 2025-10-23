import FeatureCard from '../FeatureCard';
import { PhoneOff } from 'lucide-react';

export default function FeatureCardExample() {
  return (
    <div className="p-8">
      <FeatureCard 
        icon={PhoneOff}
        title="No Phone Calls"
        description="Book appointments entirely online without the hassle of phone tag or waiting on hold."
      />
    </div>
  );
}
