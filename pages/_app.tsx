import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Short_Stack } from '@next/font/google'
import Header from '@/components/header';

const inter = Short_Stack({ subsets: ['latin'], weight: "400" });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <style jsx global>{`
      html {
        font-family: ${inter.style.fontFamily};
      }
    `}</style>
      <Component {...pageProps} />
    </>
  );
}
