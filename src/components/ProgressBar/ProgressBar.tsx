import React from "react"

type ProgressBarProps = {
  progress: number // 0 to 100
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <div
      style={{
        width: "100%",
        height: "50px",
        background: "#5a2929",
        borderRadius: "10px",
        overflow: "hidden"
      }}
    >
      <div
        style={{
          width: `${progress}%`,
          height: "100%",
          background: "green",
          transition: "width 0.3s ease"
        }}
      />
    </div>
  )
}

export default ProgressBar