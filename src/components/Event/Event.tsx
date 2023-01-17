import * as React from "react"
import { graphql } from "gatsby"
import { Typography } from "@mui/material"
import { isSameDay, format } from "date-fns"

import { CardWithMedia } from "@components/Card"

export const sanityEventFragment = graphql`
  fragment SanityEvent on SanityEvent {
    id
    title
    startDateTime
    endDateTime
    eventImage {
      ...SanityImageAsset
    }
    location
    _rawDescription
    button {
      ...SanityButton
    }
  }
`

type EventProps = {
  content: Queries.SanityEventFragment | null
}

export default function Event({ content }: EventProps) {
  if (!content) {
    console.error("No content found for event.")
    return <></>
  }

  const {
    title,
    startDateTime,
    endDateTime,
    eventImage,
    location,
    _rawDescription,
    button,
  } = content

  const start = new Date(startDateTime || 0)
  const end = new Date(endDateTime || 0)
  let dateString = ""
  // Still need to eliminate minutes if not needed
  // Still need to eliminate time if not needed
  if (start == end) {
    dateString = `${format(start, "LLL d h:mm a, y")}`
  } else if (isSameDay(start, end)) {
    dateString = `${format(start, "LLL do h:mm a")} - ${format(
      end,
      "h:mm a, y"
    )}`
  } else {
    dateString = `${format(start, "LLL d h:mm a")} - ${format(
      end,
      "LLL d h:mm a, y"
    )}`
  }

  return (
    <CardWithMedia
      header={title}
      subHeader={
        <>
          <Typography variant="h6" fontWeight="normal">
            Date: {dateString}
          </Typography>
          <Typography variant="h6" fontWeight="normal">
            Location: {location}
          </Typography>
        </>
      }
      image={eventImage}
      shadowColor="primary"
      button={button}
      content={_rawDescription}
    />
  )
}
