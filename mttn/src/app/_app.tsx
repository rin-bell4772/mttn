"use client";
import { AppProps } from 'next/app';
import { StudySetProvider } from './context/StudySetContext';
import { SetIdProvider } from './context/SetIdContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SetIdProvider>
      <Component {...pageProps} />
    </SetIdProvider>
  );
}

export default MyApp;