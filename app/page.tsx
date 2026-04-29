import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProjectSimulation from '@/components/ProjectSimulation';
import ProjectOverview from '@/components/ProjectOverview';
import SiteLayout from '@/components/SiteLayout';
import ProcessFlow from '@/components/ProcessFlow';
import EquipmentMapping from '@/components/EquipmentMapping';
import BOQSummary from '@/components/BOQSummary';
import VisualExplanation from '@/components/VisualExplanation';
import TechnicalDetails from '@/components/TechnicalDetails';
import ScopeSection from '@/components/ScopeSection';
import EnvironmentalAnalysis from '@/components/EnvironmentalAnalysis';
import DailyOperationFlow from '@/components/DailyOperationFlow';
import Footer from '@/components/Footer';
import PasscodeGate from '@/components/PasscodeGate';

export default function Home() {
  return (
    <PasscodeGate>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ProjectSimulation />
        <ProjectOverview />
        <SiteLayout />
        <ProcessFlow />
        <VisualExplanation />
        <EquipmentMapping />
        {/* <BOQSummary /> */}
        <EnvironmentalAnalysis />
        <DailyOperationFlow />
        <TechnicalDetails />
        <ScopeSection />
      </main>
      <Footer />
    </PasscodeGate>
  );
}
