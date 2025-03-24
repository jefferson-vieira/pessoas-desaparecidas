import { env } from '@/config/environment';

import createClient from 'openapi-fetch';

import type { paths } from '@/@types/api';

const { API_URL } = env;

const client = createClient<paths>({
  baseUrl: API_URL,
});

export async function getPeople(
  params: paths['/v1/pessoas/aberto/filtro']['get']['parameters']['query'],
) {
  const { data, error } = await client.GET('/v1/pessoas/aberto/filtro', {
    params: {
      query: params,
    },
  });

  if (error) {
    throw new Error();
  }

  return data;
}

export async function getPerson(id: number) {
  if (isNaN(id)) {
    return null;
  }

  const { data } = await client.GET('/v1/pessoas/{id}', {
    params: {
      path: {
        id,
      },
    },
  });

  return data;
}
