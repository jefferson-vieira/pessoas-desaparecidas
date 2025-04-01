'use client';

import type { ThemeProviderProps } from 'next-themes';
import { ThemeProvider } from 'next-themes';
import {
  isServer,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import type { ReactNode } from 'react';

function makeQueryClient() {
  return new QueryClient();
}

let browserQueryClient: QueryClient;

function getQueryClient() {
  if (isServer) {
    return makeQueryClient();
  }

  if (!browserQueryClient) {
    browserQueryClient = makeQueryClient();
  }

  return browserQueryClient;
}

type Props = {
  children: ReactNode;
} & ThemeProviderProps;

export default function Providers({ children, ...props }: Props) {
  const queryClient = getQueryClient();

  return (
    <ThemeProvider {...props}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  );
}
