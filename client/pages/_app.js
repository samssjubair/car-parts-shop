import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}
) {
  // console.log(pageProps, "props")
  const [favicon, setFavicon] = useState(null);
  // const [description, setDescription] = useState("");
  // const [metatag, setMetatag] = useState("");
  // console.log(description,metatag)

  // useEffect(() => {
  //   fetch(`${process.env.api}/metadescription/`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data.description,"description")
  //       setDescription(data.description);
  //     });
  // }, []);

  // useEffect(() => {
  //   fetch(`${process.env.api}/metatag/`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data.tag,"tag")
  //       setMetatag(data.tag);
  //     });
  // }, []);

  useEffect(() => {
    fetch(`${process.env.api}/favicon/`)
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
        {/* <meta name="description" content={description} /> */}
        {/* <meta name="keywords" content={metatag} /> */}
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export async function getServerSideProps() {
  const response= await fetch(`${process.env.api}/metadescription/`);
  const data= await response.json();
  const response1= await fetch(`${process.env.api}/metatag/`);
  const data1= await response1.json();
  return {
    props: {
      description: data.description,
      metatag: data1.tag,
    }
  }
}
