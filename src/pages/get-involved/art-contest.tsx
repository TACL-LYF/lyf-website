import * as React from "react"
import { PageProps, graphql } from "gatsby"
import { Stack, Typography } from "@mui/material"

import getPageTitle from "@utils/getPageTitle"
import { Section } from "@components/Layout"
import SanityImage from "@components/Image/SanityImage"
import PortableText from "@components/PortableText"
import { AnimatedButton } from "@components/Button"
import FAQ from "@components/FAQ"

export const query = graphql`
  query ArtContestPage {
    sanityArtContestPage {
      mainHeader
      headerImage {
        ...SanityImageAsset
      }
      _rawIntro
      timeline {
        ...SanityImageAsset
      }
      sections {
        ...SanityTitleBody
      }
      submissionFormLink
      faq {
        questionTitle
        _rawQuestionAnswer
      }
    }
  }
`

const ALERNATING_COLORS = [
  // {
  //   backgroundColor: "tertiary.main",
  //   textColor: "tertiary.contrastText",
  // },
  // {
  //   backgroundColor: "white",
  //   textColor: "text.primary",
  // },
  // {
  //   backgroundColor: "primary.main",
  //   textColor: "primary.contrastText",
  // },
  {
    backgroundColor: "white",
    textColor: "text.primary",
  },
]
const MOD = ALERNATING_COLORS.length

export const Head = getPageTitle("Art Contest")

export default function ArtContestPage({
  data,
}: PageProps<Queries.ArtContestPageQuery>) {
  const { sanityArtContestPage } = data

  if (!sanityArtContestPage)
    throw `No Sanity document for the art contest page was found.`

  return (
    <>
      {/* Header Image */}
      <SanityImage
        imageAsset={sanityArtContestPage.headerImage}
        hasRoundedCorners={false}
        style={{
          width: "100%",
        }}
      />

      {/* Intro Section */}
      <Section maxWidth="lg" backgroundColor="primary.main">
        <Stack spacing={3} alignItems="center">
          <Typography
            variant="h4"
            color="primary.contrastText"
            textAlign="center"
          >
            Introduction
          </Typography>
          <PortableText
            textAlign="center"
            color="primary.contrastText"
            content={sanityArtContestPage._rawIntro}
          />
          <AnimatedButton
            boopProps={{
              scale: 1.05,
            }}
            href={sanityArtContestPage.submissionFormLink ?? "#"}
            variant="contained"
            color="tertiary"
          >
            Link to Submission Form
          </AnimatedButton>
        </Stack>
      </Section>

      {/* Timeline */}
      <Section maxWidth="xl">
        <Stack spacing={3}>
          <Typography variant="h4" textAlign="center">
            Timeline
          </Typography>
          <SanityImage
            imageAsset={sanityArtContestPage.timeline}
            hasRoundedCorners={true}
            style={{
              width: "100%",
            }}
          />
        </Stack>
      </Section>

      {/* Sections */}
      {sanityArtContestPage.sections?.map((section, i) => (
        <Section
          maxWidth="lg"
          key={i}
          backgroundColor={ALERNATING_COLORS[i % MOD].backgroundColor}
          paddingTop={3}
          paddingBottom={3}
        >
          <Stack spacing={3}>
            <Typography
              variant="h4"
              color={ALERNATING_COLORS[i % MOD].textColor}
              textAlign="center"
            >
              {section?.title}
            </Typography>
            <PortableText
              color={ALERNATING_COLORS[i % MOD].textColor}
              textAlign="left"
              content={section?._rawBody}
            />
          </Stack>
        </Section>
      ))}

      {/* Submission Link */}
      <Section maxWidth="lg" backgroundColor="tertiary.main">
        <Stack spacing={3} alignItems="center">
          <Typography variant="h4" color="white" textAlign="center">
            Submit Your Art!
          </Typography>
          <AnimatedButton
            boopProps={{
              scale: 1.05,
            }}
            href={sanityArtContestPage.submissionFormLink ?? "#"}
            variant="contained"
            color="primary"
          >
            Link to Submission Form
          </AnimatedButton>
        </Stack>
      </Section>

      {/* FAQ Section */}
      <Section maxWidth="lg">
        <Stack spacing={3}>
          <Typography variant="h4" textAlign="center">
            Frequently Asked Questions
          </Typography>
          {sanityArtContestPage.faq?.map((faq, i) => (
            <FAQ key={faq?.questionTitle ?? i} question={faq} />
          ))}
        </Stack>
      </Section>
    </>
  )
}
