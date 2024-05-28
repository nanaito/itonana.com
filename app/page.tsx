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
            maxWidth: "48rem",
            padding: "1rem 1.5rem",
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
    </>
  )
}

export default RootPage
