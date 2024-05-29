import { M_PLUS_2 } from "next/font/google"
import "./global.css"
import Link from "next/link"
import React from "react"
import type { Metadata } from "next"
import { GoogleAnalytics } from "@next/third-parties/google"
import { FaLine, FaYoutube } from "react-icons/fa"

const font = M_PLUS_2({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "伊藤なな公式サイト",
  description: "伊藤なな 公式サイト 「電力の安定供給を私が守る」",
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
            background: "transparent",
            color: "#FFFDB5",
            padding: ".5rem 1rem",
            position: "fixed",
            width: "100%",
            zIndex: "100",
          }}
        >
          <Link
            href={"/"}
            style={{
              color: "#FFDA78",
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            伊藤なな 公式サイト
          </Link>
        </header>
        <main
          style={{
            height: "100%",
            minHeight: "100dvh",
          }}
        >
          <>{children}</>
        </main>
        <footer style={{ padding: "2rem" }}>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              padding: "1rem",
            }}
          >
            <a href="">
              <FaLine size={60} color="#5AC463" />
            </a>
            <a href="">
              <FaYoutube size={60} color="#EA3323" />
            </a>
          </div>
          <p>&copy;2024 ito nana All Rights Reserved.</p>
        </footer>
        <GoogleAnalytics gaId="G-19Z0CQ1V84" />
      </body>
    </html>
  )
}
