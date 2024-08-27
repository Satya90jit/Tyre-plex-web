import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

type Props = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  ogImage?: string;
};

const PublicLayout = ({
  children = <></>,
  title = "",
  description,
  ogImage = "./TP-logo.webp",
}: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta
          name="description"
          content={
            description
              ? description
              : "Explore our wide range of car, bike, and commercial tyres. Stay updated with the latest brands and best deals."
          }
        />
        <meta
          property="og:image"
          content={ogImage ? ogImage : "./TP-logo.webp"}
        />
      </Head>

      <main>
        <Navbar />
        {children}
        <Footer />
      </main>
    </>
  );
};

export default PublicLayout;
