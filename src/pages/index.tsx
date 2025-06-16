import Head from "next/head";
import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Recipe Book</title>
        <meta name="description" content="Поиск и подбор рецептов" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
       <Header />
      </main>
    </>
  );
}
