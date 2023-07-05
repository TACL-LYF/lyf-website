import * as React from "react"
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  useTheme,
} from "@mui/material"

import { SanityButton } from "@components/Button"
import SanityImage from "@components/Image/SanityImage"
import PortableText from "@components/PortableText"

type CardWithMediaProps = {
  header: string | null | undefined
  subHeader?: React.ReactNode
  image: Queries.SanityImageAssetFragment | null | undefined
  content: any | null | undefined
  button: Queries.SanityButtonFragment | null | undefined
  shadowColor: "primary" | "secondary" | "tertiary"
}

export default function CardWithMedia({
  header,
  subHeader,
  image,
  content,
  button,
  shadowColor,
}: CardWithMediaProps) {
  const theme = useTheme()
  const color = theme.palette[shadowColor].main

  return (
    <Card
      sx={{
        height: { lg: 1 },
        borderRadius: 4,
        border: `1px solid ${color}`,
        boxShadow: `12px 12px 0px ${color}`,
      }}
    >
      {/* Using this box to set the image height */}
      <Box
        width={1}
        height={{
          xs: 0.3,
          lg: 0.5,
        }}
      >
        <SanityImage
          imageAsset={image}
          hasRoundedCorners={false}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </Box>
      <CardHeader
        title={header}
        titleTypographyProps={{
          variant: "h4",
        }}
        sx={{
          padding: 3,
        }}
        subheader={subHeader}
      />

      <CardContent sx={{
        paddingTop: 1,
        paddingBottom: 1,
        paddingLeft: 3,
        paddingRight: 3,
      }}>
        <PortableText
          content={content}
        />
      </CardContent>
      <CardActions sx={{ padding: 3 }}>
        <SanityButton content={button} />
      </CardActions>
    </Card>
  )
}
