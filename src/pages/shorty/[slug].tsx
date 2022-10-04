import OverlappingText from "@/components/OverlappingText/OverlappingText";
import { trpc } from "@/utils/trpc";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

const Slug: NextPage = () => {
  const router = useRouter();
  const slug = router.query.slug;
  if (!slug || typeof slug != "string") {
    return (
      <>
        <div className="px-auto mx-auto text-center text-2xl font-bold text-white">
          Invalid URL
        </div>
      </>
    );
  }
  const q = trpc.shorty.getSlug.useQuery({
    slug: slug,
  });
  if (!q.isLoading && q.data && q.data.url) {
    const t = q.data.url;
    setTimeout(() => {
      router.push(t);
    }, 1500);
  }
  return (
    <>
      <Head>
        <title>You are being redirected...</title>
        <meta
          name="description"
          content="Link Shortener by Lohitaksha Malhotra"
        />
        {/* Icons */}
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/images/favicon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/images/favicon-512x512.png"
        />
      </Head>
      <div className="h-screen py-8">
        {
          <OverlappingText
            toptext={q.data?.url ? `On the way to ${q.data.url}` : `Wrong url`}
            backgroundtext={q.data?.url ? "Redirecting" : "Error"}
            startTime={0}
            stagger={800}
          />
        }
      </div>
    </>
  );
};

export default Slug;
