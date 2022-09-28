import OverlappingText from "@/components/OverlappingText/OverlappingText";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Slug: NextPage = () => {
  const router = useRouter();
  const [url, setUrl] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  useEffect(() => {
    const slug = router.query.slug;
    if (!slug) {
      return;
    }
    fetch(`/api/getSlug?slug=${slug}`)
      .then((res) => {
        if (res.status == 200) return res.json();
        else {
          setError(true);
          return { url: "" };
        }
      })
      .then((data: { url: string }) => {
        setUrl(data.url);
      });
  }, [router]);

  useEffect(() => {
    if (url != "") {
      setTimeout(() => {
        router.push(url);
      }, 1500);
    }
  }, [url, router]);

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
        <OverlappingText
          toptext={!error ? `On the way to ${url}` : `Wrong url`}
          backgroundtext={!error ? "Redirecting" : "Error"}
          startTime={0}
          stagger={800}
        />
      </div>
    </>
  );
};

export default Slug;
