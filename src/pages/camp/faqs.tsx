import * as React from "react"
import { PageProps, graphql } from "gatsby"
import {
  Box,
  Button,
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material"
import { ExpandLess, ExpandMore } from "@mui/icons-material"

import { Section } from "@components/Layout"
import PortableText from "@components/PortableText"
import getPageTitle from "@utils/getPageTitle"

type FAQProps = {
  question: {
    readonly questionTitle: string | null
    readonly _rawQuestionAnswer: Record<string, unknown> | null
  } | null
}

function FAQ({ question }: FAQProps) {
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

export const query = graphql`
  query FAQsPage {
    sanityFaqPage {
      mainHeader
      subHeader
      sections {
        header
        questions {
          questionTitle
          _rawQuestionAnswer
        }
      }
    }
  }
`

export const Head = getPageTitle("FAQ")

export default function FAQsPage({ data }: PageProps<Queries.FAQsPageQuery>) {
  const { sanityFaqPage } = data
  if (!sanityFaqPage) throw `No Sanity document for the culture page was found.`
  const { mainHeader, subHeader, sections } = sanityFaqPage

  return (
    <>
      <Section backgroundColor="secondary.light">
        <Stack>
          <Typography variant="h3">{mainHeader}</Typography>
          <Typography variant="h6">{subHeader}</Typography>
        </Stack>
      </Section>
      <Section maxWidth="lg">
        <Stack>
          {sections?.map((faqSection) => {
            if (!faqSection) return <></>
            const { header, questions } = faqSection

            return (
              <List key={header}>
                <ListItem
                  sx={{
                    paddingTop: 4,
                    paddingBottom: 4,
                  }}
                >
                  <Typography variant="h4">{header}</Typography>
                </ListItem>
                {questions?.map((question) => (
                  <FAQ key={question?.questionTitle} question={question} />
                ))}
              </List>
            )
          })}
        </Stack>
      </Section>
      <Section>
        {/* comment */}
        <Stack spacing={2} alignItems="flex-start">
          <Typography variant="h4">
            Have other questions? Contact us for more information!
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href="mailto:lyf@tacl.org"
            size="medium"
            fullWidth={false}
          >
            Email Us
          </Button>
        </Stack>
      </Section>
    </>
  )
}
