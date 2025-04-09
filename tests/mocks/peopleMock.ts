import { paths } from '@/@types/api';
import { API_PER_PAGE } from '@/config/constants';

import { getPersonResponseFactory } from './personMock';

export function getPeopleResponseFactory() {
  return {
    content: [getPersonResponseFactory()],
    empty: false,
    first: true,
    last: true,
    number: 0,
    numberOfElements: 1,
    pageable: {
      offset: 0,
      paged: true,
      pageNumber: 0,
      pageSize: API_PER_PAGE,
      sort: {
        empty: true,
        sorted: false,
        unsorted: true,
      },
      unpaged: false,
    },
    size: 1,
    sort: {
      empty: true,
      sorted: false,
      unsorted: true,
    },
    totalElements: 1,
    totalPages: 1,
  } as const satisfies paths['/v1/pessoas/aberto/filtro']['get']['responses'][200]['content']['*/*'];
}
