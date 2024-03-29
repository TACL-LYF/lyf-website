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

type SanityButtonProps = Omit<ButtonProps, "href" | "variant" | "ref" | "content"> & {
  content: Queries.SanityButtonFragment | null | undefined
  boopProps?: BoopProps
}

const SanityButton = React.forwardRef<HTMLButtonElement, SanityButtonProps>(
  ({ content, boopProps, ...rest }, ref) => {
    if (!content?.text) {
      console.debug("No content found for the button")
      return <></>
    }
    const { text, link, variant } = content

    const sharedProps = {
      href: link || undefined,
      variant: variant,
      ref: ref,
      ...rest,
    }

    return boopProps ? (
      <AnimatedButton boopProps={boopProps} {...sharedProps}>
        {text}
      </AnimatedButton>
    ) : (
      <Button {...sharedProps}>{text}</Button>
    )
  }
)

export default SanityButton
