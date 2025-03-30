import { Card, CardContent } from '@/components/ui/card';

export default function Footer() {
  return (
    <footer className="mt-auto">
      <Card className="rounded-none">
        <CardContent className="space-y-1 text-center">
          <p>PROJETO PRÁTICO IMPLEMENTAÇÃO FRONT-END</p>

          <p>Feito por Jefferson Vieira da Silva</p>
        </CardContent>
      </Card>
    </footer>
  );
}
