import type { ReactNode } from 'react';
import BackButton from '@/components/BackButton';

type Props = {
  children: ReactNode;
};

export default function PersonPageLayout({ children }: Props) {
  return (
    <div className="space-y-6">
      <nav role="navigation">
        <BackButton />
      </nav>

      {children}
    </div>
  );
}
