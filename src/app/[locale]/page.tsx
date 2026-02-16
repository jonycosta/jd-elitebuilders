import { Hero } from "@/components/sections/Hero";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Portfolio } from "@/components/sections/Portfolio";
import { AboutStory } from "@/components/sections/AboutStory";
import { BudgetSimulator } from "@/components/features/BudgetSimulator";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { generatePageMetadata } from "@/lib/metadata";
import type { Locale } from "@/lib/contacts";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata({
    locale: locale as Locale,
    namespace: 'SEO.home'
  });
}

export default async function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <ServicesPreview />
      <ProcessSteps />
      <Portfolio />
      <AboutStory />
      <BudgetSimulator />
      <WhatsAppButton />
    </main>
  );
}
