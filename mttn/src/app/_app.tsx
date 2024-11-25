"use client";
import { AppProps } from 'next/app';
import { StudySetProvider } from './context/StudySetContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StudySetProvider>
      <Component {...pageProps} />
    </StudySetProvider>
  );
}

export default MyApp;