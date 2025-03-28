import { getPeople } from '@/services/api';
import PersonCard from '@/components/PersonCard';

import Pagination from '@/components/Pagination';
import { API_FIRST_PAGE, API_PER_PAGE } from '@/config/constants';
import ErrorFeedback from '@/components/ErrorFeedback';
import type { SearchParams } from './types';

type Props = SearchParams;

export default async function People(props: Props) {
  const { name, sex, status } = props;

  const maxAge = props.maxAge ? Number(props.maxAge) : undefined;
  const minAge = props.minAge ? Number(props.minAge) : undefined;
  const page = Number(props.page) || API_FIRST_PAGE;

  const { data, error } = await getPeople({
    faixaIdadeFinal: maxAge,
    faixaIdadeInicial: minAge,
    nome: name,
    pagina: page,
    porPagina: API_PER_PAGE,
    sexo: sex,
    status,
  });

  if (error) {
    return <ErrorFeedback />;
  }

  const { content, first, last } = data;

  return (
    <>
      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {content.map((person) => (
          <PersonCard key={person.id} person={person} />
        ))}
      </section>

      <Pagination current={page} isFirst={first} isLast={last} />
    </>
  );
}
