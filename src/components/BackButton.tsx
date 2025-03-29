'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function BackButton() {
  const router = useRouter();

  const handleGoBackClick = () => {
    router.back();
  };

  return (
    <Button variant="link" onClick={handleGoBackClick}>
      <ArrowLeft />
      Voltar
    </Button>
  );
}
