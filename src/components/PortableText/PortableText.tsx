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

type Props = StackProps & {
  content: any | null
}

const components: PortableTextComponents = {
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

export default function PortableText({ content, ...rest }: Props) {
  return (
    // Note we can use spacing here to determine how far apart each paragraph should be
    <Stack {...rest}>
      <BasePortableText value={content || []} components={components} />
    </Stack>
  )
}
