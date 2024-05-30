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
          backgroundSize: "cover",
          display: "flex",
          minHeight: "100dvh",
          padding: "2rem",
          position: "relative",
        }}
      >
        <section
          style={{
            padding: "1rem",
            position: "absolute",
            right: 0,
            top: "4rem",
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
        <section
          style={{
            background: "#f5f5f5",
            borderRadius: ".25rem",
            boxShadow: "0 0 1rem #555",
            fontSize: ".8rem",
            left: "5vw",
            maxWidth: "48rem",
            padding: "1rem 1.5rem",
            position: "absolute",
            top: "80vh",
            width: "90vw",
          }}
        >
          <h2>プロフィール</h2>
          上智大学経済学部経営学科卒業。
          電力全面自由化に伴い新電力の立上げに関わった後2019年から独立し、現在の有限会社スタジオガルを開業。
          電力事業の立ち上げ・運営支援、企業ＰＲや商品広報、ＺＥＨ住宅やマイクログリッド等の地域脱炭素活動を行う。
          実績として大手新電力での研修や営業企画、国立大学での講義、展示会やセミナー等での講師を行う。
          電気業界をたのしく！わかりやすく！解説した
          Youtubeチャンネル「電気予報士なな子のおでんき予報」を 2020 年
          4月開設し情報発信中。
          第二種電気工事士試験を独学で合格。現在電験三種の一発合格に向けて勉強中。
        </section>
      </section>
      <section style={{ height: "10rem" }}></section>
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
          <li>雑誌「エネルギーフォーラム」　2024年5月論点再エネ賦課金　寄稿</li>
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
    </>
  )
}

export default RootPage
