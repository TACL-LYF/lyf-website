import * as React from "react"
import { Box, Container, ContainerProps, SxProps } from "@mui/material"

type SectionProps = React.PropsWithChildren<{
  sx?: SxProps
  maxWidth?: ContainerProps["maxWidth"]
  backgroundColor?: string
  paddingTop?: any
  paddingBottom?: any
}>

export default function Section({
  sx = {},
  maxWidth = "xl",
  backgroundColor,
  paddingTop = { xs: 5, md: 10 },
  paddingBottom = { xs: 5, md: 10 },
  children,
}: SectionProps) {
  console.log(paddingTop)
  return (
    <Box
      sx={{
        paddingLeft: { xs: 3, md: 10 },
        paddingRight: { xs: 3, md: 10 },
        paddingTop: paddingTop,
        paddingBottom: paddingBottom,
        backgroundColor: backgroundColor,
        ...sx,
      }}
    >
      {maxWidth ? (
        <Container maxWidth={maxWidth} sx={{ height: 1 }}>
          {children}
        </Container>
      ) : (
        children
      )}
    </Box>
  )
}
