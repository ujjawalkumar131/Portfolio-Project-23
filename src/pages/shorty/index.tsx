import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

const ShortyHome: NextPage = () => {
  const [badSlug, setBadSlug] = useState<boolean>(false);
  const [badUrl, setBadUrl] = useState<boolean>(false);
  const [slug, setSlug] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const router = useRouter();
  const handleSubmit = () => {
    setBadUrl(false);
    setBadSlug(false);
    var submit = true;
    if (slug == "") {
      // slug empty
      submit = false;
      setBadSlug(true);
    }
    if (url == "") {
      // url empty
      submit = false;
      setBadUrl(true);
    }
    // Slug should only contain lowercase letters, numbers and dashes
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
      // regex failed for slug
      submit = false;
      setBadSlug(true);
    }
    const urlreg =
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/;
    if (!urlreg.test(url)) {
      // regex failed for url
      submit = false;
      setBadUrl(true);
    }
    if (submit) {
      fetch(`/api/addSlug?slug=${slug}&url=${url}`).then((res) => {
        if (res.status == 200) {
          router.push(`/shorty/${slug}`);
        }
      });
    }
  };
  return (
    <>
      <Head>
        <title>Lohitaksha | Shorty</title>
        <meta name="description" content="Link Shortener" />
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
      <div className="my-8">
        <form
          className="flex flex-col w-1/2 mx-auto gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <label htmlFor="slug" className="text-stone-400 font-bold">
            Slug
          </label>
          <input
            type="text"
            id="slug"
            className={`rounded-md outline-none text-white bg-black border-2 ${
              badSlug ? "border-red-400" : "border-sky-500"
            } text-xl font-semibold px-2 py-2`}
            placeholder="coolwebsite"
            onChange={(e) => {
              setSlug(e.target.value);
            }}
          />
          <label htmlFor="url" className="text-stone-400 font-bold">
            Url
          </label>
          <input
            type="text"
            id="url"
            className={`rounded-md outline-none text-white bg-black border-2 ${
              badUrl ? "border-red-400" : "border-sky-500"
            } text-xl font-semibold px-2 py-2`}
            placeholder="https://yourwebsite.com"
            onChange={(e) => {
              setUrl(e.target.value);
            }}
          />
          <button
            type="submit"
            className="bg-black text-white font-bold rounded-md px-4 py-2 text-2xl border-2 border-sky-500 mt-4"
          >
            Create Link
          </button>
        </form>
      </div>
    </>
  );
};

export default ShortyHome;
