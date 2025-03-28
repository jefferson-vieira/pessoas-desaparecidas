'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { AlertCircle } from 'lucide-react';

export default function ErrorFeedback() {
  const router = useRouter();

  return (
    <div className="space-y-6">
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />

        <AlertTitle>Ops...</AlertTitle>

        <AlertDescription>
          Um erro inesperado ocorreu. Por favor, tente novamente.
        </AlertDescription>

        <AlertDescription>
          Se o problema persistir, por favor, tente novamente mais tarde.
        </AlertDescription>
      </Alert>

      <Button onClick={() => router.refresh()}>Tentar novamente</Button>
    </div>
  );
}
