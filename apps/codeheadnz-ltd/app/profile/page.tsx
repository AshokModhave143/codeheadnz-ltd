import { Introduction } from './_module/components/Introduction';
import { TechStack } from './_module/components/TechStack';

export default function ProfilePafe() {
  return (
    <div className="h-screen w-screen bg-background overflow-hidden">
      <Introduction />
      <TechStack />
    </div>
  );
}
