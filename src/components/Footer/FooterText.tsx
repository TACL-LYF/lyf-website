import React from "react"

import { Typography, TypographyProps } from "@mui/material"

type FooterTextProps = Omit<TypographyProps, "variant" | "color"> & {
  text: string
}

export default function FooterText({
  text,
  ...rest
}: FooterTextProps) {
  return (
    <Typography variant="h6" color="white" {...rest}>
      {text}
    </Typography>
  )
}
