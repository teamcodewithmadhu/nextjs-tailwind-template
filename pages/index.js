import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-red-600 text-2xl">
        This is text from nextjs application
      </div>
    </div>
  );
}
