import Head from "next/head";
import Link from "next/link";
import React from "react";
import Navbar from "@/components/Navbar";
import SoftwareCardList, { SoftwareCard } from "@/components/SoftwareCardList";

const earlySoftwareCards: SoftwareCard[] = [];

const EarlySoftwares: React.FC<{}> = () => {
  return (
    <>
      <Head>
        <title>開発早期のソフトウェア - aoirint</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <section className="section">
        <div className="container">
          <h1 className="title">開発早期のソフトウェア</h1>
          <h2 className="subtitle is-6 mb-4">
            アルファ版・ベータ版の開発早期段階にあるソフトウェアを紹介します
          </h2>
          {earlySoftwareCards.length > 0 ? (
            <SoftwareCardList cards={earlySoftwareCards} />
          ) : (
            <p className="content">現在、項目はありません。</p>
          )}
          <h2 className="title is-4 mt-5">その他のソフトウェア</h2>
          <p className="content">
            <ul>
              <li>
                <Link href="/software/">ソフトウェア一覧</Link>
              </li>
            </ul>
          </p>
        </div>
      </section>
    </>
  );
};

export default EarlySoftwares;
