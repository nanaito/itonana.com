import { FC } from "react"

export const PolicyItem: FC<{
  title: string
  content: string
  index: number
}> = ({ index, title, content }) => {
  return (
    <div
      style={{
        background: "rgba(250, 189, 0, 0.3)",
        border: "solid 2px rgb(250, 189, 0)",
        borderRadius: ".5rem",
        padding: "1rem",
        position: "relative",
      }}
    >
      <div
        style={{
          background: "rgb(250, 189, 0)",
          borderRadius: "2rem",
          left: "-1rem",
          padding: ".5rem 1rem",
          position: "absolute",
          top: "-1rem",
        }}
      >
        {index + 1}
      </div>
      <h3 style={{ marginBottom: ".5rem" }}>{title}</h3>
      <p>{content}</p>
    </div>
  )
}
