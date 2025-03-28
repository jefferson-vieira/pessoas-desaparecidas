import { getPeople } from '@/services/api';
import PersonCard from '@/components/PersonCard';

import Pagination from '@/components/Pagination';
import { API_FIRST_PAGE, API_PER_PAGE } from '@/constants';
import SearchPeople from '@/components/SearchPeople';

type Props = {
  searchParams: Promise<{
    name?: string;
    page?: string;
    sex?: string;
    status?: string;
    minAge?: string;
    maxAge?: string;
  }>;
};

export default async function PeoplePage(props: Props) {
  const searchParams = await props.searchParams;

  const { name, sex, status } = searchParams;

  const maxAge = searchParams.maxAge ? Number(searchParams.maxAge) : undefined;
  const minAge = searchParams.minAge ? Number(searchParams.minAge) : undefined;
  const page = Number(searchParams.page) || API_FIRST_PAGE;

  const { content, first, last } = await getPeople({
    faixaIdadeFinal: maxAge,
    faixaIdadeInicial: minAge,
    nome: name,
    pagina: page,
    porPagina: API_PER_PAGE,
    sexo: sex,
    status,
  });

  return (
    <div className="flex flex-col gap-6">
      <SearchPeople />

      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {content?.map((person) => (
          <PersonCard key={person.id} person={person} />
        ))}
      </section>

      <Pagination current={page} isFirst={first} isLast={last} />
    </div>
  );
}
