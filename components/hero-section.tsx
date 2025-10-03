import { Typography } from "@/components/ui/typography";
import { Container } from "@/components/container";
import { Heart } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-secondary/30 to-background">
      <Container>
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="relative">
            <div className="w-64 h-64 rounded-full bg-muted flex items-center justify-center overflow-hidden border-4 border-primary/20 shadow-lg">
              <Typography.Large className="text-muted-foreground">
                Фотография
              </Typography.Large>
            </div>
            <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full p-3 shadow-md">
              <Heart className="w-6 h-6 text-primary-foreground" fill="currentColor" />
            </div>
          </div>
          
          <div className="space-y-4">
            <Typography.H1 className="text-4xl lg:text-5xl text-primary">
              Мария Васильевна Сидорова
            </Typography.H1>
            
            <Typography.Lead className="text-2xl text-foreground/80">
              29 января 1963 — 3 октября 2025
            </Typography.Lead>
            
            <div className="pt-4">
              <Typography.P className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Учитель математики, любящая мать и бабушка.
                <br />
                Светлая память о человеке, который дарил знания и тепло.
              </Typography.P>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}