"use client"

import React from "react"
import type { NextPage } from "next"

const RootPage: NextPage = () => {
  return (
    <>
      <section
        style={{
          alignItems: "end",
          backgroundImage: "url(profile.jpg)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          display: "flex",
          minHeight: "100dvh",
          padding: "2rem",
          position: "relative",
          zIndex: 101,
        }}
      >
        <div
          style={{
            borderBottom: "solid .25rem rgb(250, 189, 0)",
            fontWeight: "bold",
            left: 0,
            padding: ".5rem 1rem",
            position: "absolute",
            top: 0,
          }}
        >
          <p>国民民主党 東京第14区総支部長</p>
          <h1
            style={{
              fontSize: "min(10dvw, 6rem)",
              lineHeight: 1,
            }}
          >
            伊藤なな
          </h1>
        </div>
        <section
          style={{
            background: "rgba(42, 98, 154, 0.95)",
            borderTop: "solid .25rem rgb(250, 189, 0)",
            bottom: "1rem",
            padding: "1rem 1.5rem",
            position: "absolute",
            right: 0,
          }}
        >
          <h1
            style={{
              background: "transparent",
              color: "#f0f0f0",
              fontSize: "min(12dvw, 6rem)",
              fontWeight: "bold",
              textAlign: "right",
            }}
          >
            電力の安定供給を私が守る
          </h1>
        </section>
      </section>
      <div
        style={{
          margin: "auto",
          maxWidth: "64rem",
        }}
      >
        <section
          style={{
            padding: "1rem",
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/NaHNsXBpr4U"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{
              display: "flex",
              height: "24rem",
              margin: "auto",
              maxWidth: "50rem",
            }}
          ></iframe>
          <a
            href="//forms.gle/SwTXh3Zzv259pCfN9"
            target="_blank"
            style={{
              background: "rgb(250, 189, 0)",
              borderRadius: ".25rem",
              boxShadow: ".0rem .0rem .2rem rgba(42, 98, 154, 0.5)",
              display: "block",
              fontSize: "1.5rem",
              margin: ".5rem auto",
              maxWidth: "40rem",
              padding: ".75rem 2rem",
              textAlign: "center",
            }}
          >
            党員サポーター募集中！
          </a>
          <p
            style={{
              margin: "auto",
              maxWidth: "46rem",
            }}
          >
            伊藤ななの活動を応援していただく方を世界中のみなさんから募集しております。伊藤ななの理念と政策に賛同する方の支援をお待ちしています。あなたのお力をぜひ、お貸しください。
          </p>
        </section>
        <section
          style={{
            fontSize: "1rem",
            padding: "1rem 1.5rem",
          }}
        >
          <h2
            style={{
              borderBottom: "solid .1rem rgb(250, 189, 0)",
            }}
          >
            プロフィール
          </h2>
          <div
            style={{
              padding: ".5rem 0",
            }}
          >
            <br />
            <b style={{ fontSize: "1.5rem" }}>伊藤なな</b>
            <br />
            <br />
            1989年埼玉県生まれ。 上智大学経済学部経営学科卒業。
            <br />
            在学中にバックパッカーとして世界各地を旅する。
          </div>
          <div
            style={{
              padding: ".5rem 0",
            }}
          >
            再生可能エネルギー関連会社に入社し、
            電力全面自由化に伴い小売り電気事業者の立ち上げに関わる。
          </div>
          <div
            style={{
              padding: ".5rem 0",
            }}
          >
            2019年より独立開業。
            <br />
            電力事業の立ち上げから、運営や広報の支援業務を行う。
            <br />
            加えて、地域のカーボンニュートラル推進のため、ZEH住宅、マイクログリッドのプロジェクトに参画。
          </div>
          <div
            style={{
              padding: ".5rem 0",
            }}
          >
            2020年より 電力業界の広報・啓発活動のため、Youtubeを開始。
            <br />
            業界をわかりやすく！楽しく解説した「電気予報士なな子のおでんき予報」チャンネルは1万3千人の視聴者。
            <br />
            これまで、電力会社などの企業での講演、学校での出前授業、展示会・イベントでの登壇を行う。
          </div>
          <div
            style={{
              padding: ".5rem 0",
            }}
          >
            2024年に 『電気予報士なな子のおでんき予報』を出版。
            <br />
            「電気料金」「電力システム」「カーボンニュートラル」を解説した同書はAmazon１位を獲得、
            <br />
            第二種電気工事士、電験三種（電気主任技術者）を保有。
            <br />
            現在は一人前の技術者となるべく、定期点検をしながら実務経験を積む。
          </div>
        </section>
        <section
          style={{
            padding: "1rem",
          }}
        >
          <h2
            style={{
              borderBottom: "solid .1rem rgb(250, 189, 0)",
            }}
          >
            Youtubeチャンネル
          </h2>
          <br />
          <p>
            <a href="//www.youtube.com/@denkiyohoshi" target="_blank">
              電気予報士 なな子のおでんき予報
            </a>
          </p>
          <br />
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            {[
              "https://www.youtube.com/embed/jT04ZtKJJ9w",
              "https://www.youtube.com/embed/FVaQ2CFNrWU",
              "https://www.youtube.com/embed/tlST_Y7dj-o",
              "https://www.youtube.com/embed/HB7kDMDhBWI",
              "https://www.youtube.com/embed/F1jOQcFT_d4",
            ].map((url) => (
              <iframe
                style={{
                  border: "none",
                  height: "16rem",
                  maxWidth: "28rem",
                  width: "100%",
                }}
                src={url}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            ))}
          </div>
        </section>
        <section
          style={{
            padding: "1rem",
          }}
        >
          <h2
            style={{
              borderBottom: "solid .1rem rgb(250, 189, 0)",
            }}
          >
            執筆・寄稿実績
          </h2>
          <br />
          <p>著書</p>
          <a href="//www.amazon.co.jp/dp/4885555388" target="_blank">
            <h3>電気予報士なな子のおでんき予報</h3>
            <figure
              style={{
                maxWidth: "12rem",
                width: "100%",
              }}
            >
              <img
                src="//m.media-amazon.com/images/I/61lbMaS3RPL._SY522_.jpg"
                alt="電気予報士なな子のおでんき予報"
                style={{ width: "100%" }}
              />
            </figure>
          </a>
          <br />
          <p>寄稿</p>
          <ul
            style={{
              padding: "2rem",
            }}
          >
            <li>
              電気業界の就職支援サイト『Watt Magazine』 公認ライター
              <p>
                <a href="//www.watt-mag.jp/">https://www.watt-mag.jp/</a>{" "}
              </p>
            </li>
            <li>オーム社 月刊誌「新電気」連載</li>
            <li>雑誌「エネルギーフォーラム」 2024年5月論点再エネ賦課金 寄稿</li>
            <li>
              エネ百科 2023年4月寄稿
              <p>
                「電気のことをわかりやすく発信！電気予報士なな子さんに聞いてみた」
              </p>
            </li>
          </ul>
        </section>
        <section
          style={{
            padding: "1rem",
          }}
        >
          <h2
            style={{
              borderBottom: "solid .1rem rgb(250, 189, 0)",
            }}
          >
            登壇実績
          </h2>
          <ul
            style={{
              padding: "2rem",
            }}
          >
            <li>
              東京パワーテクノロジー 「TPT環境ビジョン2050」周知セミナーにて講演
            </li>
            <li>
              電気安全関東委員会
              「安定供給と脱炭素の達成に必要な人や安全を守る仕組み」講演
            </li>
            <li>工務店へのスマートハウスに関するセミナー</li>
            <li>広島大学にて脱炭素に関するセミナー</li>
          </ul>
        </section>
        <section
          style={{
            padding: "1rem",
          }}
        >
          <a
            href="//lin.ee/xSm1bWw"
            target="_blank"
            style={{
              background: "rgb(250, 189, 0)",
              borderRadius: ".25rem",
              boxShadow: ".0rem .0rem .1rem rgba(0, 0, 0, 0.3)",
              display: "block",
              margin: ".5rem auto",
              padding: ".75rem 2rem",
              textAlign: "center",
            }}
          >
            ニュースレターに登録する
          </a>
          <p>
            伊藤ななの活動についてLINEを通して報告させていただきます。フォローお願いいたします。
          </p>
        </section>
      </div>
    </>
  )
}

export default RootPage
