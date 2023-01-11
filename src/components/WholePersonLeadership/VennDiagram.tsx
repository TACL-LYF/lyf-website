import * as React from "react"
import { useSpring } from "@react-spring/web"
import { useTheme, styled } from "@mui/material"

type TextProps = {
  x: number,
  y: number,
  text: string,
}

const Text = styled("text")(({theme}) => ({
  ...theme.typography.h5,
  fill: "white"
}))

export default function VennDiagram() {
  const {shape, palette, typography } = useTheme()
  const lineSpacing = typography.h5.lineHeight
  console.log(lineSpacing)
  return (
    <svg height="640" width="640" style={{borderRadius: shape.borderRadius * 2, backgroundColor: "#F8F2F4"}}>
      <ellipse cx="194" cy="352" rx="160" ry="160" fill={palette.secondary.main} fillOpacity={0.8}/>
      <Text x={130} y={269}>
        Identity & Development
      </Text>

      <ellipse cx="151" cy="568" rx="175" ry="175" fill={palette.primary.main} fillOpacity={0.8}/>
      <Text x={77} y={505}>Acceptance & Belonging</Text>

      <ellipse cx="472" cy="536" rx="206" ry="206" fill={palette.tertiary.main} fillOpacity={0.8}/>
      <Text x={384} y={481}>Leadership</Text>
    </svg>
  )
}
