"use client"

import { ReactElement } from "react"

const GridBackground = (): ReactElement => {
    return (
        <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage:
            "linear-gradient(rgba(115, 115, 115, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(115, 115, 115, 0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    )
}

export default GridBackground