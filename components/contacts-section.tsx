import { Typography } from "@/components/ui/typography";
import { Container } from "@/components/container";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";

export function ContactsSection() {
  return (
    <section className="py-16 bg-secondary/10">
      <Container>
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <Typography.H2 className="text-3xl text-primary">
              Контакты
            </Typography.H2>
            <Typography.P className="text-muted-foreground">
              Для связи с близкими Марии Васильевны
            </Typography.P>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <Typography.H4 className="text-lg">Телефон</Typography.H4>
                    <Link href="tel:+70000000000" className="block text-foreground hover:text-primary transition-colors">
                      <Typography.P className="text-foreground">
                        +7 (000) 000-00-00
                      </Typography.P>
                    </Link>
                    <Typography.Muted className="text-sm">
                      Контактное лицо: семья
                    </Typography.Muted>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <Typography.H4 className="text-lg">Электронная почта</Typography.H4>
                    <Link href="mailto:family@example.com" className="block text-foreground hover:text-primary transition-colors">
                      <Typography.P className="text-foreground break-all">
                        family@example.com
                      </Typography.P>
                    </Link>
                    <Typography.Muted className="text-sm">
                      Для соболезнований и воспоминаний
                    </Typography.Muted>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="max-w-2xl mx-auto bg-card border-primary/20">
            <CardContent className="pt-6 text-center space-y-3">
              <Typography.P className="text-foreground/90 leading-relaxed">
                Семья благодарит всех за поддержку, добрые слова и светлую память о Марии Васильевне.
              </Typography.P>
              <Typography.P className="text-muted-foreground text-sm">
                Мы всегда рады услышать ваши воспоминания о ней.
              </Typography.P>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}