import HeroSection from './sections/HeroSection';
import SelectedWorksSection from './sections/SelectedWorksSection';
import PhilosophySection from './sections/PhilosophySection';
import UpdatesSection from './sections/UpdatesSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SelectedWorksSection />
      <PhilosophySection />
      <UpdatesSection />
    </>
  );
}
