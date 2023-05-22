import * as React from "react"
import {
  useSpring,
  useSpringRef,
  useChain,
  animated as a,
  config,
  SpringRef,
  SpringValue,
  useInView,
} from "@react-spring/web"
import { useTheme, styled } from "@mui/material"

const Text = styled("text")(({ theme }) => ({
  ...theme.typography.h5,
  fill: "white",
}))

type EllipseSpring = {
  rx: SpringValue<number>
  ry: SpringValue<number>
  fillOpacity: SpringValue<number>
}

function useSpringAndRef(radius: number): [SpringRef, EllipseSpring] {
  const springRef = useSpringRef()
  const spring = useSpring({
    ref: springRef,
    from: { rx: 0, ry: 0, fillOpacity: 0 },
    to: { rx: radius, ry: radius, fillOpacity: 0.8 },
    config: config.wobbly,
  })

  return [springRef, spring]
}

export default function VennDiagram() {
  const { shape, palette } = useTheme()
  const [ref, inView] = useInView({ once: false })

  // We create three spring configs
  const [firstSpringRef, firstSpring] = useSpringAndRef(160)
  const [secondSpringRef, secondSpring] = useSpringAndRef(175)
  const [thirdSpringRef, thirdSpring] = useSpringAndRef(206)

  // I would do this with useChain but they don't allow in view starting
  // so I've mimicked it myself. Note that because we do "once" we won't
  // allow setTimeout to conflict with itself.
  React.useEffect(() => {
    if (inView) {
      firstSpringRef.start(), setTimeout(() => secondSpringRef.start(), 400)
      setTimeout(() => thirdSpringRef.start(), 800)
    }
  }, [inView, firstSpringRef, secondSpringRef, thirdSpringRef])

  return (
    <svg
      viewBox="0 0 640 640"
      style={{
        borderRadius: shape.borderRadius * 2,
        backgroundColor: "#F8F2F4",
      }}
      ref={ref}
    >
      <a.ellipse
        cx="194"
        cy="352"
        fill={palette.secondary.main}
        {...firstSpring}
      ></a.ellipse>
      <Text x={65} y={320}>
        Identity & Development
      </Text>

      <a.ellipse
        cx="151"
        cy="568"
        fill={palette.primary.main}
        {...secondSpring}
      />
      <Text x={60} y={515}>
        Acceptance &
      </Text>
      <Text x={78} y={545}>
        Belonging
      </Text>

      <a.ellipse
        cx="472"
        cy="536"
        fill={palette.tertiary.main}
        {...thirdSpring}
      />
      <Text x={400} y={500}>
        Leadership
      </Text>
    </svg>
  )
}
