import type { ReactNode } from 'react';
import SearchPeople from '@/components/SearchPeople';

type Props = {
  children: ReactNode;
};

export default function PeoplePageLayout({ children }: Props) {
  return (
    <div className="flex flex-col gap-6">
      <SearchPeople />

      {children}
    </div>
  );
}
