import Head from "next/head";
import Image from "next/image";
import * as React from "react";

import Navbar from "@/components/Navbar";

const ProfilePage: React.FC<{}> = () => {
  return (
    <>
      <Head>
        <title>プロフィール - aoirint</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <section className="section">
        <div className="container">
          <div className="columns is-vcentered is-mobile">
            <div className="column is-narrow">
              <Image
                src="/images/icon.png"
                alt="Logo image"
                className="image is-96x96"
                width="96"
                height="96"
              />
            </div>
            <div className="column">
              <h1 className="title is-2">aoirint</h1>
              <p className="subtitle is-6 pt-1">技術とさぶかる</p>
            </div>
          </div>
          <div className="columns is-multiline">
            <div className="column is-4 my-2">
              <h2 className="title is-5">連絡先・SNS</h2>
              <table className="table">
                <tbody>
                  <tr>
                    <th>Twitter</th>
                    <td>
                      <a rel="me" href="https://twitter.com/aoirint">
                        @aoirint
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th>Mastodon</th>
                    <td>
                      <a rel="me" href="https://mstdn.aoirint.com/@aoirint">
                        @aoirint@mstdn.aoirint.com
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th>GitHub</th>
                    <td>
                      <a rel="me" href="https://github.com/aoirint">
                        @aoirint
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>
                      <a rel="me" href="mailto:aoirint@gmail.com">
                        aoirint@gmail.com
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="column is-8 my-2">
              <h2 className="title is-5">自己紹介</h2>
              <p>
                WebプログラミングやLinuxサーバ運用を中心とするソフトウェア開発者です。
                使用するプログラミング言語・技術はPython、TypeScript、Git、Dockerなど。
                たまに電子工作や3Dプリンタを使ったものづくりもしています。
                ずんだもん
                などの音声合成キャラクターが好きで、フリーの音声合成ソフトウェア
                VOICEVOX のOSS開発に協力しています。
              </p>
            </div>
            <div className="column is-4 my-2">
              <h2 className="title is-5">OSSコントリビューション</h2>
              <h3 className="title is-6">音声合成ソフトウェア VOICEVOX</h3>
              <h4 className="subtitle is-7">
                <a href="https://github.com/VOICEVOX">
                  https://github.com/VOICEVOX
                </a>
              </h4>
              <div className="content pb-1">
                <ul>
                  <li>レビュワー（2021年12月～）</li>
                  <li>
                    自動ビルド（GitHub Actions）、Linux
                    x64バイナリ対応、Docker対応、Linux armhfバイナリ対応ほか
                  </li>
                </ul>
              </div>
              <h3 className="title is-6">静的サイトジェネレータ miyadaiku</h3>
              <h4 className="subtitle is-7">
                <a href="https://github.com/miyadaiku/miyadaiku">
                  https://github.com/miyadaiku/miyadaiku
                </a>
              </h4>
              <div className="content pb-1">
                <ul>
                  <li>機能追加、バグ修正</li>
                </ul>
              </div>
            </div>
            <div className="column is-4 my-2">
              <h2 className="title is-5">受賞等</h2>
              <div className="content pb-1">
                <ul>
                  <li>
                    技育祭 ウインターハッカソンvol7 最優秀賞 「Spatial Volume
                    Control App」（2021年2月）
                  </li>
                  <li>
                    電気通信大学 2019年度 学生表彰（課外活動）（2020年3月）
                  </li>
                  <li>
                    東京ゲームショウ2019 センス・オブ・ワンダーナイト BEST
                    Technological Game Award 「UPLIGHT」（2019年9月）
                  </li>
                </ul>
              </div>
            </div>
            <div className="column is-4 my-2">
              <h2 className="title is-5">論文・研究報告</h2>
              <div className="content pb-1">
                <ul>
                  <li>
                    （第二著者）
                    <a href="https://doi.org/10.1145/3474349.3480207">
                      UPLIGHT: A Novel Portable Game Device with Omnidirectional
                      Projection Display
                    </a>
                    , UIST 2021（2021年10月）
                  </li>
                  <li>
                    （第二著者）
                    <a href="https://id.ndl.go.jp/bib/031336480">
                      UPLIGHT：小型全周囲ディスプレイを搭載した次世代の携帯型ゲームデバイスの開発
                    </a>
                    , 情報処理学会 第188回HCI研究会（2020年6月）
                  </li>
                </ul>
              </div>
            </div>
            <div className="column is-4 my-2">
              <h2 className="title is-5">作品展示</h2>
              <h3 className="title is-6">UPLIGHT</h3>
              <div className="content pb-1">
                <ul>
                  <li>トリエ京王調布 こもれびテラス デモ展示（2020年12月） </li>
                  <li>京王あそびの森 HUGHUG デモ展示（2020年9月） </li>
                  <li>
                    GDG DevFest Tokyo 2019 学生展示ブース デモ展示（2019年12月）{" "}
                  </li>
                  <li>GUGEN2019 デモ展示（2019年12月）</li>
                  <li>
                    東京ゲームショウ2019 インディーゲームコーナー選考ブース
                    デモ展示（2019年9月）
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfilePage;
