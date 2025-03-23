import { env } from '@/config/environment';

import createClient from 'openapi-fetch';

import type { paths } from '@/@types/api';

const { API_URL } = env;

const client = createClient<paths>({
  baseUrl: API_URL,
});

export async function getPeople() {
  const { data, error } = await client.GET('/v1/pessoas/aberto/filtro', {});

  if (error) {
    throw new Error();
  }

  return data;
}
