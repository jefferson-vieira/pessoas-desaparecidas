import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { UserX } from 'lucide-react';

export default function EmptyResultsFeedback() {
  return (
    <Alert>
      <UserX className="h-4 w-4" />

      <AlertTitle>Nenhuma pessoa encontrada!</AlertTitle>

      <AlertDescription>
        Nenhuma pessoa encontrada com esses parâmetros de busca. Por favor,
        verifique os parâmetros de busca e tente novamente!
      </AlertDescription>
    </Alert>
  );
}
