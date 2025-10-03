"use client";

import { Typography } from "@/components/ui/typography";
import { Container } from "@/components/container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Image } from "lucide-react";

export function PhotoGallery() {
  const photos = [
    { id: 1, title: "На уроке математики" },
    { id: 2, title: "С учениками" },
    { id: 3, title: "Семейное фото" },
    { id: 4, title: "День рождения" },
    { id: 5, title: "На природе" },
    { id: 6, title: "С внуками" },
  ];

  return (
    <section className="py-16 bg-secondary/10">
      <Container>
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <Typography.H2 className="text-3xl text-primary">
              Галерея воспоминаний
            </Typography.H2>
            <Typography.P className="text-muted-foreground">
              Моменты, которые навсегда останутся в наших сердцах
            </Typography.P>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {photos.map((photo) => (
                <CarouselItem key={photo.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="border-primary/20 overflow-hidden hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <div className="aspect-square bg-muted flex items-center justify-center">
                          <div className="text-center space-y-2">
                            <Image className="w-12 h-12 text-muted-foreground mx-auto" />
                            <Typography.Small className="text-muted-foreground block px-4">
                              {photo.title}
                            </Typography.Small>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-primary" />
            <CarouselNext className="text-primary" />
          </Carousel>

          <div className="text-center">
            <Typography.Muted>
              Здесь можно разместить фотографии из жизни Марии Васильевны
            </Typography.Muted>
          </div>
        </div>
      </Container>
    </section>
  );
}