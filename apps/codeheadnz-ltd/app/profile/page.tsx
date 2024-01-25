import { TechStack } from './_module/components/TechStack';
import { Introduction } from './_module/components/Introduction';

export default function ProfilePafe() {
  return (
    <div className="h-screen w-screen bg-background overflow-auto">
      <Introduction />
      <TechStack />
    </div>
  );
}
