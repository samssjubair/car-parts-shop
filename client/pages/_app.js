import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}
) {
  const [favicon, setFavicon] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4800/api/v1/favicon/')
      .then(response => response.blob())
      .then(blob => {
        const url = URL.createObjectURL(blob);
        setFavicon(url);
      });
  }, []);

  return (
    <SessionProvider session={session}>
      <Head>
        <link rel="icon" href={favicon} />
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
