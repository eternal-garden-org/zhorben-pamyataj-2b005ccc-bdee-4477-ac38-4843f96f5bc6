import { Typography } from "@/components/ui/typography";
import { Container } from "@/components/container";
import { Quote } from "lucide-react";

export function QuoteSection() {
  return (
    <section className="py-16 bg-primary/5">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -top-4 -left-4 text-primary/20">
              <Quote className="w-16 h-16 text-primary/20" />
            </div>
            
            <div className="relative z-10 text-center space-y-6 py-8">
              <Typography.Blockquote className="border-l-0 pl-0 text-2xl lg:text-3xl text-foreground/90 font-normal leading-relaxed">
                «Образование — это то, что остаётся после того, 
                как забывается всё выученное в школе»
              </Typography.Blockquote>
              
              <Typography.P className="text-muted-foreground italic">
                — Альберт Эйнштейн
              </Typography.P>
              
              <div className="pt-4">
                <Typography.P className="text-foreground/80 max-w-2xl mx-auto leading-relaxed">
                  Мария Васильевна всегда верила, что настоящее образование — 
                  это не только знания, но и умение думать, анализировать 
                  и быть честным человеком.
                </Typography.P>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 text-primary/20 rotate-180">
              <Quote className="w-16 h-16 text-primary/20" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}