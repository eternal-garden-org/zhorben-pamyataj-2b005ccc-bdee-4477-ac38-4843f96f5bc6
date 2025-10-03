import { Typography } from "@/components/ui/typography";
import { Container } from "@/components/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, GraduationCap, Users } from "lucide-react";

export function BiographySection() {
  return (
    <section className="py-16 bg-background">
      <Container>
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <Typography.H2 className="text-3xl text-primary">
              О жизни
            </Typography.H2>
            <Typography.P className="text-muted-foreground max-w-3xl mx-auto">
              Мария Васильевна посвятила свою жизнь образованию и семье
            </Typography.P>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>
                    <Typography.H3 className="text-xl">Образование</Typography.H3>
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <Typography.P className="text-muted-foreground leading-relaxed">
                  Мария Васильевна получила высшее педагогическое образование и более 35 лет преподавала математику, вдохновляя учеников на познание точных наук.
                </Typography.P>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>
                    <Typography.H3 className="text-xl">Призвание</Typography.H3>
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <Typography.P className="text-muted-foreground leading-relaxed">
                  Учитель от Бога, она умела находить подход к каждому ученику, делая сложные темы понятными и интересными. Многие её ученики с благодарностью вспоминают её уроки.
                </Typography.P>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>
                    <Typography.H3 className="text-xl">Семья</Typography.H3>
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <Typography.P className="text-muted-foreground leading-relaxed">
                  Заботливая мать и любящая бабушка. Семья была для неё источником радости и вдохновения. Она всегда находила время для близких, несмотря на занятость.
                </Typography.P>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-secondary/20 border-primary/20">
            <CardContent className="pt-6">
              <Typography.P className="text-center text-foreground/90 leading-relaxed max-w-4xl mx-auto">
                Мария Васильевна была человеком с добрым сердцем и светлой душой. Её отличали искренность, 
                отзывчивость и готовность помочь каждому, кто в этом нуждался. Она оставила яркий след 
                в сердцах всех, кто её знал — учеников, коллег, друзей и родных.
              </Typography.P>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}