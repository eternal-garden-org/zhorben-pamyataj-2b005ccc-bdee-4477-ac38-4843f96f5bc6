import { Typography } from "@/components/ui/typography";
import { Container } from "@/components/container";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";

export function TributesSection() {
  const tributes = [
    {
      id: 1,
      author: "От семьи",
      text: "Дорогая мама и бабушка, ты всегда была для нас примером доброты, мудрости и терпения. Твоя любовь согревала нас, твоя поддержка давала силы. Мы будем помнить тебя всегда и передадим твои ценности следующим поколениям. Спасибо за всё, что ты для нас сделала. Светлая память.",
      date: "От любящей семьи",
    },
    {
      id: 2,
      author: "От учеников",
      text: "Мария Васильевна была не просто учителем — она была наставником и другом. Её уроки математики были интересными и понятными. Она верила в каждого из нас и помогала раскрыть наш потенциал. Спасибо Вам за знания, терпение и веру в нас.",
      date: "Выпускники разных лет",
    },
    {
      id: 3,
      author: "От коллег",
      text: "Работать рядом с Марией Васильевной было честью. Она была профессионалом своего дела, всегда готовым помочь и поделиться опытом. Её доброжелательность и оптимизм создавали особую атмосферу в коллективе. Мы будем скучать по тебе, дорогая коллега.",
      date: "Педагогический коллектив",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <Container>
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <Typography.H2 className="text-3xl text-primary">
              Слова памяти
            </Typography.H2>
            <Typography.P className="text-muted-foreground">
              Воспоминания тех, кто знал и любил Марию Васильевну
            </Typography.P>
          </div>

          <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {tributes.map((tribute) => (
              <Card key={tribute.id} className="border-primary/20 bg-card hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-full shrink-0">
                      <Heart className="w-5 h-5 text-primary" fill="currentColor" />
                    </div>
                    <div className="space-y-3 flex-1">
                      <Typography.P className="text-foreground/90 leading-relaxed italic">
                        "{tribute.text}"
                      </Typography.P>
                      <div className="flex flex-col gap-1 pt-2">
                        <Typography.Small className="text-primary font-semibold">
                          {tribute.author}
                        </Typography.Small>
                        <Typography.Muted className="text-xs">
                          {tribute.date}
                        </Typography.Muted>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="max-w-2xl mx-auto bg-secondary/20 border-primary/20">
            <CardContent className="pt-6 text-center space-y-4">
              <Typography.P className="text-foreground/80">
                Если вы хотите поделиться своими воспоминаниями о Марии Васильевне,
                пожалуйста, свяжитесь с семьёй.
              </Typography.P>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}