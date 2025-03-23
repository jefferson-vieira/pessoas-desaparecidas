import { getPeople } from '@/services/api';
import PersonCard from '@/components/PersonCard';

import Pagination from '@/components/Pagination';
import { API_FIRST_PAGE, API_PER_PAGE } from '@/constants';

type Props = {
  searchParams: Promise<{
    page: string;
  }>;
};

export default async function Home(props: Props) {
  const searchParams = await props.searchParams;

  const page = Number(searchParams.page) || API_FIRST_PAGE;

  const { content, first, last } = await getPeople({
    pagina: page,
    porPagina: API_PER_PAGE,
  });

  return (
    <div className="flex flex-col gap-6">
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {content?.map((person) => (
          <PersonCard key={person.id} person={person} />
        ))}
      </section>

      <Pagination current={page} isFirst={first} isLast={last} />
    </div>
  );
}
