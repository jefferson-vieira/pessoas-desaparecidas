import { Suspense } from 'react';
import PeoplePageLoading from './loading';
import People from './people';
import type { SearchParams } from './types';

type Props = {
  searchParams: Promise<SearchParams>;
};

export default async function PeoplePage(props: Props) {
  const searchParams = await props.searchParams;

  return (
    <Suspense
      key={JSON.stringify(searchParams)}
      fallback={<PeoplePageLoading />}
    >
      <People {...searchParams} />
    </Suspense>
  );
}
