'use client';

import { usePathname, useSearchParams } from 'next/navigation';

import {
  Pagination as PaginationBase,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

type Props = {
  current: number;
  isFirst: boolean;
  isLast: boolean;
};

export default function Pagination({ current, isFirst, isLast }: Props) {
  const pathname = usePathname();

  const searchParams = useSearchParams();

  const currentQuery = Object.fromEntries(searchParams);

  return (
    <PaginationBase>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            disabled={isFirst}
            href={{
              pathname,
              query: {
                ...currentQuery,
                page: current - 1,
              },
            }}
          />
        </PaginationItem>

        <PaginationItem>
          <PaginationLink isActive href="#">
            {current + 1}
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationNext
            disabled={isLast}
            href={{
              pathname,
              query: {
                ...currentQuery,
                page: current + 1,
              },
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </PaginationBase>
  );
}
