import { M_PLUS_2 } from "next/font/google"
import "./global.css"
import Link from "next/link"
import React from "react"
import type { Metadata } from "next"

const font = M_PLUS_2({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "いとうなな公式サイト",
  description: "いとうなな 公式サイト 「電力の安定供給を私が守る」",
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
            いとうなな 公式サイト
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
          <p>&copy;2024 ito nana All Rights Reserved.</p>
        </footer>
      </body>
    </html>
  )
}
