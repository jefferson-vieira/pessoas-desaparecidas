import { env } from '@/config/environment';

import createClient from 'openapi-fetch';

import type { paths } from '@/@types/api';

import type { CreateReportRequest } from './api.types';
import { getISODate } from '@/utils/date-time';
import { HTTP_STATUS_NOT_FOUND } from '@/config/constants';
import type { ApiError } from '@/@types/api-error';

const { API_URL } = env;

const getClient = () => {
  return createClient<paths>({
    baseUrl: API_URL,
  });
};

export function getPeople(
  params: paths['/v1/pessoas/aberto/filtro']['get']['parameters']['query'],
) {
  return getClient().GET('/v1/pessoas/aberto/filtro', {
    params: {
      query: params,
    },
  });
}

export async function getPerson(id: number) {
  const response = await getClient().GET('/v1/pessoas/{id}', {
    params: {
      path: {
        id,
      },
    },
  });

  if (
    (response.error as unknown as ApiError)?.status === HTTP_STATUS_NOT_FOUND
  ) {
    return {
      data: null,
      error: null,
    };
  }

  return response;
}

export async function createReport({
  date,
  description,
  info,
  ocoId,
  pictures,
}: CreateReportRequest) {
  const { error } = await getClient().POST(
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
