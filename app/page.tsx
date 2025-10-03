import { PageLayout } from "@/components/page-layout";
import { HeroSection } from "@/components/hero-section";
import { BiographySection } from "@/components/biography-section";
import { QuoteSection } from "@/components/quote-section";
import { PhotoGallery } from "@/components/photo-gallery";
import { TributesSection } from "@/components/tributes-section";
import { ContactsSection } from "@/components/contacts-section";
import { Container } from "@/components/container";
import { Typography } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <PageLayout>
      <HeroSection />
      <BiographySection />
      <QuoteSection />
      <PhotoGallery />
      <TributesSection />
      <ContactsSection />
      
      <footer className="py-8 bg-primary/5">
        <Container>
          <Separator className="mb-6" />
          <div className="text-center space-y-2">
            <Typography.Muted>
              В вечной памяти о Марии Васильевне Сидоровой
            </Typography.Muted>
            <Typography.Muted className="text-xs">
              1963 — 2025
            </Typography.Muted>
          </div>
        </Container>
      </footer>
    </PageLayout>
  );
}