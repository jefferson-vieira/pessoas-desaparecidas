import { render, screen } from '@testing-library/react';
import * as nextNavigation from 'next/navigation';
import { http, HttpResponse } from 'msw';
import { env } from '@/config/environment';
import Person from '@/app/person/[id]/page';
import type { Params } from '@/app/person/[id]/types';
import { faker } from '@faker-js/faker';
import { getPersonResponseFactory } from '../../mocks/personMock';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { ReactNode } from 'react';
import server from '../../server';

jest.mock('next/navigation');

const renderPage = async (paramsMock: Awaited<Params>) => {
  const params: Params = Promise.resolve(paramsMock);

  const wrapper = ({ children }: { children: ReactNode }) => {
    const queryClient = new QueryClient();

    return (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
  };

  return render(await Person({ params }), { wrapper });
};

describe('page /person/:id', () => {
  it('redirect to not found page when id is invalid', async () => {
    const notFoundSpy = jest.spyOn(nextNavigation, 'notFound');

    const invalidIdMock = faker.string.alpha();

    await renderPage({
      id: invalidIdMock,
    });

    expect(notFoundSpy).toHaveBeenCalled();
  });

  it('show feedback when get person error', async () => {
    const idMock = faker.string.numeric();

    server.use(
      http.get(`${env.API_URL}/v1/pessoas/${idMock}`, () => {
        return HttpResponse.text('Error', { status: 500 });
      }),
    );

    await renderPage({
      id: idMock,
    });

    expect(
      screen.getByText(
        'Um erro inesperado ocorreu. Por favor, tente novamente.',
      ),
    ).toBeInTheDocument();
  });

  it('show person', async () => {
    const idMock = faker.string.numeric();

    const getPersonResponseMock = getPersonResponseFactory();

    server.use(
      http.get(`${env.API_URL}/v1/pessoas/${idMock}`, () => {
        return HttpResponse.json(getPersonResponseMock);
      }),
    );

    await renderPage({
      id: idMock,
    });

    expect(
      screen.getByRole('heading', {
        name: new RegExp(getPersonResponseMock.nome),
      }),
    ).toBeInTheDocument();
  });
});
