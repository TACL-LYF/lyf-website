import React from "react"
import { Button, ButtonProps } from "@mui/material"
import { graphql } from "gatsby"
import AnimatedButton from "./AnimatedButton"

import { BoopProps } from "@hooks/useBoop"

export const sanityButtonFragment = graphql`
  fragment SanityButton on SanityButton {
    text
    link
    variant
  }
`

type SanityButtonProps = Omit<ButtonProps, "href" | "variant" | "ref"> & {
  content: Queries.SanityButtonFragment | null
  isAnimated?: boolean
  boopProps?: BoopProps
}

const SanityButton = React.forwardRef<HTMLButtonElement, SanityButtonProps>(
  ({ content, isAnimated = false, boopProps, ...rest }, ref) => {
    if (!content) {
      console.error("No content found for the button")
      return <></>
    }
    const { text, link, variant } = content

    const sharedProps = {
      href: link,
      variant: variant,
      ref: ref,
      ...rest,
    }

    return isAnimated && boopProps ? (
      <AnimatedButton boopProps={boopProps} {...sharedProps}>
        {text}
      </AnimatedButton>
    ) : (
      <Button {...sharedProps}>{text}</Button>
    )
  }
)

export default SanityButton
