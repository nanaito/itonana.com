import { M_PLUS_2 } from "next/font/google"
import "./global.css"
import Link from "next/link"
import React from "react"
import { FaLine, FaYoutube } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import type { Metadata } from "next"
import { GoogleAnalytics } from "@next/third-parties/google"

const font = M_PLUS_2({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "伊藤なな 公式サイト | 「電力の安定供給を私が守る」",
  description: "国民民主党 東京第14区総支部長 伊藤ななの公式サイトです。 ",
  applicationName: "伊藤なな公式サイト",
  keywords: ["伊藤なな", "国民民主党"],
  openGraph: {
    type: "profile",
    firstName: "なな",
    lastName: "伊藤",
    url: "https://itonana.com",
    title: "伊藤なな 公式サイト | 「電力の安定供給を私が守る」",
    description: "国民民主党 東京第14区総支部長 伊藤ななの公式サイトです。",
    siteName: "伊藤なな 公式サイト",
    images: [
      {
        url: "https://itonana.com/profile.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Denkiyohoushi",
    images: "https://itonana.com/profile.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body style={{ ...font.style }}>
        <header
          style={{
            background: "#f7f7f7",
            padding: ".5rem 1rem",
            position: "fixed",
            width: "100%",
            zIndex: "100",
          }}
        >
          <Link
            href={"/"}
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            伊藤なな&nbsp;<small>公式サイト</small>
          </Link>
        </header>
        <main
          style={{
            minHeight: "calc(100dvh - 3rem)",
          }}
        >
          <>{children}</>
        </main>
        <footer style={{ padding: "2rem" }}>
          <div
            style={{
              alignItems: "center",
              display: "flex",
              gap: "2rem",
              padding: "1rem 0",
            }}
          >
            <a href="//lin.ee/xSm1bWw">
              <FaLine size={60} color="#5AC463" />
            </a>
            <a href="//www.youtube.com/channel/UCUvo2HPKy9vzABXfCHMd-JA">
              <FaYoutube size={60} color="#EA3323" />
            </a>
            <a href="//x.com/Denkiyohoushi">
              <FaXTwitter size={50} />
            </a>
          </div>
          <p>&copy;2024 ito nana All Rights Reserved.</p>
        </footer>
        <GoogleAnalytics gaId="G-19Z0CQ1V84" />
      </body>
    </html>
  )
}
