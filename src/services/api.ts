import { env } from '@/config/environment';

import createClient from 'openapi-fetch';

import type { paths } from '@/@types/api';

import type { CreateReportRequest } from './api.types';
import { getISODate } from '@/utils/date-time';

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

export async function createReport({
  date,
  description,
  info,
  ocoId,
  pictures,
}: CreateReportRequest) {
  const { error } = await client.POST(
    '/v1/ocorrencias/informacoes-desaparecido',
    {
      params: {
        query: {
          data: getISODate(date),
          descricao: description,
          informacao: info,
          ocoId,
        },
      },
      body: {
        // @ts-expect-error see https://github.com/openapi-ts/openapi-typescript/issues/1214
        files: pictures,
      },
      bodySerializer() {
        const body = new FormData();

        if (pictures) {
          for (const file of pictures) {
            body.append('files', file);
          }
        }

        return body;
      },
    },
  );

  if (error) {
    throw new Error();
  }
}
