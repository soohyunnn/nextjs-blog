import Head from "next/head";
import Link from "next/link";
import router, { useRouter } from "next/router";
import { useEffect } from "react";
import Layout from "../../components/layout";

export default function FirstPost() {
  const router = useRouter();
  useEffect(() => {
    router.push("/posts/first-post/?counter=10", undefined, { shallow: true });
  }, []);

  useEffect(() => {
    alert(router.query.counter); //맨 처음에는 undefined 가 뜨고 그 뒤로 10이 뜬다(counter=10).
  }, [router.query.counter]);

  return (
    <>
      <Layout>
        <Head>
          <title>First Post Title</title>
        </Head>
        <h1>First Post</h1>
        <h2>
          <Link href="/" legacyBehavior>
            <a>Back to home</a>
          </Link>
        </h2>
      </Layout>
    </>
  );
}
