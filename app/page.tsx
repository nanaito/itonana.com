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
        }}
      >
        <section
          style={{
            bottom: "1rem",
            padding: "1rem",
            position: "absolute",
            right: 0,
          }}
        >
          <h1
            style={{
              color: "#2A629A",
              fontSize: "3rem",
              textAlign: "right",
              textShadow: "#ccc .1rem .1rem .15rem",
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
            fontSize: "1rem",
            padding: "1rem 1.5rem",
          }}
        >
          <h2>プロフィール</h2>
          <div
            style={{
              padding: ".5rem 0",
            }}
          >
            伊藤なな
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
          <h2>Youtubeチャンネル</h2>
          <p>電気予報士 なな子のおでんき予報</p>
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
          <h2>執筆・寄稿実績</h2>
          <ul
            style={{
              padding: "2rem",
            }}
          >
            <li>
              電気業界の就職支援サイト『Watt Magazine』　公認ライター
              <p>
                <a href="//www.watt-mag.jp/">https://www.watt-mag.jp/</a>{" "}
              </p>
            </li>
            <li>オーム社　月刊誌「新電気」連載</li>
            <li>
              雑誌「エネルギーフォーラム」　2024年5月論点再エネ賦課金　寄稿
            </li>
            <li>
              エネ百科　2023年4月寄稿
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
          <h2>登壇実績</h2>
          <ul
            style={{
              padding: "2rem",
            }}
          >
            <li>
              東京パワーテクノロジー　「TPT環境ビジョン2050」周知セミナーにて講演
            </li>
            <li>
              電気安全関東委員会　「安定供給と脱炭素の達成に必要な人や安全を守る仕組み」講演
            </li>
            <li>工務店へのスマートハウスに関するセミナー</li>
            <li>広島大学にて脱炭素に関するセミナー</li>
          </ul>
        </section>
      </div>
    </>
  )
}

export default RootPage
