"use client"

import { ReactElement } from "react";

const GradientBackground = (): ReactElement => {
    return (
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-mono-900 z-1" />
    )
}

export default GradientBackground