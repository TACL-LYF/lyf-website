import * as React from "react"
import {
  Box,
  Divider,
  ListItemButton,
  ListItemText,
  Collapse,
} from "@mui/material"
import { ExpandLess, ExpandMore } from "@mui/icons-material"

import PortableText from "@components/PortableText"

type FAQProps = {
  question: {
    readonly questionTitle: string | null
    readonly _rawQuestionAnswer: Record<string, unknown> | null
  } | null
}

export default function FAQ({ question }: FAQProps) {
  const [open, setOpen] = React.useState(false)
  if (!question) {
    console.warn("Question not found")
    return <></>
  }

  const { questionTitle, _rawQuestionAnswer } = question
  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <>
      <Divider />
      <ListItemButton
        sx={{
          paddingTop: 2,
          paddingBottom: 2,
        }}
        onClick={handleClick}
      >
        <ListItemText
          primary={questionTitle}
          primaryTypographyProps={{
            variant: "h6",
          }}
        />
        {open ? <ExpandLess color="primary" /> : <ExpandMore color="primary" />}
      </ListItemButton>
      <Collapse in={open} unmountOnExit>
        <Box sx={{ padding: 4 }}>
          <PortableText content={_rawQuestionAnswer} />
        </Box>
      </Collapse>
    </>
  )
}
