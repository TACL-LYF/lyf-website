import * as React from "react"
import { Box, Container, ContainerProps } from "@mui/material"

type SectionProps = React.PropsWithChildren<{
  sx?: ContainerProps["sx"]
  maxWidth?: ContainerProps["maxWidth"]
  backgroundColor?: string
}>

export default function Section({
  sx = {},
  maxWidth = "xl",
  backgroundColor,
  children,
}: SectionProps) {
  return (
    <Box
      sx={{
        padding: { xs: 3, md: 10 },
        backgroundColor: backgroundColor,
        ...sx,
      }}
    >
      {maxWidth ? (
        <Container maxWidth={maxWidth} sx={{height: 1}}>{children}</Container>
      ) : (
        children
      )}
    </Box>
  )
}
