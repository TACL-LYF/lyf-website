import React from "react"

import { Box, Stack } from "@mui/material"
import { useSpring, animated, config } from "@react-spring/web"
import { Link } from "gatsby"

import FooterText from "./FooterText"
import useMouseOver from "@hooks/useMouseOver"

type FooterLinkProps = {
  text: string
  to: string
}

const AnimatedBox = animated(Box)

export default function FooterLink({ text, to }: FooterLinkProps) {
  const [isMouseOver, onMouseEnter, onMouseLeave] = useMouseOver()
  const spring = useSpring({
    width: isMouseOver ? "100%" : "0%",
    height: "4px",
    backgroundColor: "white",
    config: {
      clamp: true,
      ...config.stiff
    }
  })

  return (
    <Stack onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <FooterText
        text={text}
        // @ts-ignore For some reason type doesn't like Link as a component
        component={Link}
        to={to}
        style={{
          textDecoration: "none",
        }}
      />
      <AnimatedBox style={spring}/>
    </Stack>
  )
}
