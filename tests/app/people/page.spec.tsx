import { render, screen } from '@testing-library/react';
import * as nextNavigation from 'next/navigation';
import type { SearchParams } from '@/app/(people)/types';
import { http, HttpResponse } from 'msw';
import People from '@/app/(people)/people';
import { env } from '@/config/environment';
import { getPeopleResponseFactory } from '../../mocks/peopleMock';
import server from '../../server';

jest.mock('next/navigation');

const renderPage = async (paramsMock: Partial<SearchParams> = {}) => {
  const useSearchParamsSpy = jest.spyOn(nextNavigation, 'useSearchParams');

  useSearchParamsSpy.mockReturnValue(
    new URLSearchParams(paramsMock) as nextNavigation.ReadonlyURLSearchParams,
  );

  return render(await People({ ...paramsMock }));
};

describe('page /', () => {
  it('show feedback when get people error', async () => {
    server.use(
      http.get(`${env.API_URL}/v1/pessoas/aberto/filtro`, () => {
        return HttpResponse.text('Error', { status: 500 });
      }),
    );

    await renderPage();

    expect(
      screen.getByText(
        'Um erro inesperado ocorreu. Por favor, tente novamente.',
      ),
    ).toBeInTheDocument();
  });

  it('show people', async () => {
    const getPeopleResponseMock = getPeopleResponseFactory();

    server.use(
      http.get(`${env.API_URL}/v1/pessoas/aberto/filtro`, () => {
        return HttpResponse.json(getPeopleResponseMock);
      }),
    );

    await renderPage();

    expect(
      screen.getByRole('link', {
        name: new RegExp(getPeopleResponseMock.content[0].nome),
      }),
    ).toBeInTheDocument();
  });
});
