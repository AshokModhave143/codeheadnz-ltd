import { Introduction } from './_module/components/Introduction';
import { TechStack } from './_module/components/TechStack';

export default function ProfilePafe() {
  return (
    <div className="h-screen bg-background overflow-y-scroll">
      <Introduction />
      <TechStack />
    </div>
  );
}
