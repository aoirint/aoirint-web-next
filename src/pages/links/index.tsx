import Head from "next/head";
import Image from "next/image";
import * as React from "react";
import Navbar from "@/components/Navbar";

const LinksPage: React.FC<{}> = () => {
  return (
    <>
      <Head>
        <title>リンク集 - aoirint</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <section className="section">
        <div className="container">
          <h1 className="title is-3 mb-6">リンク集</h1>
          <p className="mt-2 mb-6">
            リンクの追加・変更・削除などは、
            <a href="https://github.com/aoirint/aoirint-web-next/issues">
              Issues
            </a>
            、
            <a href="https://github.com/aoirint/aoirint-web-next/pulls">
              Pull requests
            </a>
            、 その他連絡先までお願いします。
          </p>
          <div className="columns is-multiline is-mobile">
            <div className="column is-12 my-2">
              <h2 className="title is-4 mt-6 mb-4">個人サイト</h2>
              <table className="table">
                <tbody>
                  <tr>
                    <th className="is-vcentered py-2">リンク</th>
                    <th className="is-vcentered py-2">管理人</th>
                  </tr>
                  <tr>
                    <td className="is-vcentered py-4">
                      <a href="https://www.yude.jp/">
                        <Image
                          src="/links/images/yude_jp.png"
                          alt="yude.jpのバナー画像"
                          title="yude.jp"
                          width="234"
                          height="60"
                        />
                      </a>
                    </td>
                    <td className="is-vcentered py-4">yude さん</td>
                  </tr>
                  <tr>
                    <td className="is-vcentered py-4">
                      <a href="https://pickledchair.com/">
                        SuitCase&apos;s Site
                      </a>
                    </td>
                    <td className="is-vcentered py-4">SuitCase さん</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="column is-12 my-2">
              <h2 className="title is-4 mt-6 mb-4">ソフトウェア</h2>
              <table className="table">
                <tbody>
                  <tr>
                    <th className="is-vcentered py-2">ジャンル</th>
                    <th className="is-vcentered py-2">リンク</th>
                    <th className="is-vcentered py-2">管理人</th>
                  </tr>
                  <tr>
                    <td className="is-vcentered py-4">音声合成ソフトウェア</td>
                    <td className="is-vcentered py-4">
                      <a href="https://voicevox.hiroshiba.jp/">VOICEVOX</a>
                    </td>
                    <td className="is-vcentered py-4">VOICEVOX Organization</td>
                  </tr>
                  <tr>
                    <td className="is-vcentered py-4">プログラミング言語</td>
                    <td className="is-vcentered py-4">
                      <a href="https://www.python.org/">Python</a>
                    </td>
                    <td className="is-vcentered py-4">
                      Python Software Foundation
                    </td>
                  </tr>
                  <tr>
                    <td className="is-vcentered py-4">JavaScript 環境</td>
                    <td className="is-vcentered py-4">
                      <a href="https://nodejs.org/">Node.js</a>
                    </td>
                    <td className="is-vcentered py-4">OpenJS Foundation</td>
                  </tr>
                  <tr>
                    <td className="is-vcentered py-4">Webフレームワーク</td>
                    <td className="is-vcentered py-4">
                      <a href="https://www.gatsbyjs.com/">Gatsby</a>
                    </td>
                    <td className="is-vcentered py-4">Gatsby, Inc.</td>
                  </tr>
                  <tr>
                    <td className="is-vcentered py-4">GPGPU</td>
                    <td className="is-vcentered py-4">
                      <a href="https://developer.nvidia.com/">
                        NVIDIA Developer
                      </a>
                    </td>
                    <td className="is-vcentered py-4">NVIDIA Corporation</td>
                  </tr>
                  <tr>
                    <td className="is-vcentered py-4">GPGPU</td>
                    <td className="is-vcentered py-4">
                      <a href="https://pytorch.org/">PyTorch</a>
                    </td>
                    <td className="is-vcentered py-4">PyTorch Foundation</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="column is-12 my-2">
              <h2 className="title is-4 mt-6 mb-4">キャラクター</h2>
              <table className="table">
                <tbody>
                  <tr>
                    <th className="is-vcentered py-2">リンク</th>
                    <th className="is-vcentered py-2">管理人</th>
                  </tr>
                  <tr>
                    <td className="is-vcentered py-4">
                      <a href="https://zunko.jp/">東北ずん子 公式HP</a>
                    </td>
                    <td className="is-vcentered py-4">SSS LLC</td>
                  </tr>
                  <tr>
                    <td className="is-vcentered py-4">
                      <a href="https://www.gynoid.co.jp/">
                        ガイノイド オフィシャルサイト
                      </a>
                    </td>
                    <td className="is-vcentered py-4">Gynoid</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LinksPage;
