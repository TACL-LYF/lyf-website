import * as React from "react"
import {
  PortableText as BasePortableText,
  PortableTextProps,
  PortableTextComponents,
} from "@portabletext/react"
import { Typography, styled, Stack, StackProps } from "@mui/material"

// export const sanityButtonFragment = graphql`
//   fragment SanityButton on SanityButton {
//     text
//     link
//     variant
//   }
// `

const Underline = styled("span")({
  textDecoration: "underline",
})

const HEADER_SIZES = ["h1", "h2", "h3", "h4", "h5", "h6", "normal"] as const

type Props = Omit<StackProps, "content"> & {
  content: any | null | undefined | Record<string, unknown>
  minHeaderSize?: (typeof HEADER_SIZES)[number]
}

const portableTextBaseComponents: PortableTextComponents = {
  block: {
    h1: ({ children }) => <Typography variant="h1">{children}</Typography>,
    h2: ({ children }) => <Typography variant="h2">{children}</Typography>,
    h3: ({ children }) => <Typography variant="h3">{children}</Typography>,
    h4: ({ children }) => <Typography variant="h4">{children}</Typography>,
    h5: ({ children }) => <Typography variant="h5">{children}</Typography>,
    h6: ({ children }) => <Typography variant="h6">{children}</Typography>,
    normal: ({ children }) => (
      <Typography variant="body1">{children}</Typography>
    ),
    quote: ({ children }) => (
      <Typography variant="body2" textAlign="center">
        {children}
      </Typography>
    ),
  },
  list: {
    bullet: ({ children }) => <ul>{children}</ul>,
    number: ({ children }) => <ol>{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  marks: {
    // Decorators
    strong: ({ children }) => <b>{children}</b>,
    em: ({ children }) => <em>{children}</em>,
    underline: ({ children }) => <Underline>{children}</Underline>,

    // Annotations
    externalLink: ({ value, children }) => (
      <a href={value.href} target={value.blank ? "_blank" : "_self"}>
        {children}
      </a>
    ),
  },
}

export default function PortableText({
  content,
  minHeaderSize,
  ...rest
}: Props) {
  // If we're given a minHeaderSize then for now we'll set every block to be that header size.
  // We should eventually just filter out the minimum size and keep the higher sizes but oh well.
  const components: PortableTextComponents = minHeaderSize
    ? {
        ...portableTextBaseComponents,
        block: ({ children }) => (
          // @ts-ignore Not sure why variant is complaining
          <Typography variant={minHeaderSize}>{children}</Typography>
        ),
      }
    : portableTextBaseComponents

  return (
    // Note we can use spacing here to determine how far apart each paragraph should be
    <Stack {...rest}>
      <BasePortableText value={content || []} components={components} />
    </Stack>
  )
}
