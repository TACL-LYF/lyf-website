import React from "react"
import { graphql } from "gatsby"
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material"
import { ExpandMore } from "@mui/icons-material"

import PortableText from "@components/PortableText"

export const sanityDropdownFragment = graphql`
  fragment SanityDropdown on SanityDropdown {
    _key
    dropdownHeader
    _rawDropdownBody
  }
`

type DropdownProps = {
  content: Queries.SanityDropdownFragment | null | undefined
}

export default function Dropdown({ content }: DropdownProps) {
  if (!content) {
    return <></>
  }

  const { dropdownHeader, _rawDropdownBody } = content
  return (
    <Accordion key={`additional-details-${dropdownHeader}`} elevation={0}>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls={`${dropdownHeader}-content`}
        id={`${dropdownHeader}-`}
      >
        <Typography>{dropdownHeader}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <PortableText content={_rawDropdownBody} />
      </AccordionDetails>
    </Accordion>
  )
}
