import * as React from "react"
import { PageProps, graphql } from "gatsby"
import { Stack, Typography } from "@mui/material"
import { ChatBubble, Twitter, Psychology, Favorite, AutoAwesome, RocketLaunch } from "@mui/icons-material"
import Grid from "@mui/material/Unstable_Grid2"
import { Section } from "@components/Layout"
import PortableText from "@components/PortableText"
import { VennDiagram } from "@components/WholePersonLeadership"
import { AlternatingContentGrid } from "@components/Card"
import getPageTitle from "@utils/getPageTitle"
import {
  Box,
  Card,
  CardContent,
  CardHeader,
} from "@mui/material"
import SanityImage from "@components/Image/SanityImage"
import { rgba } from "@react-spring/shared";

export const query = graphql`
  query CulturePage {
    sanityCulturePage {
      mainHeader
      _rawSubHeader
      blurb {
        ...SanityTitleBody
      }
      pillars {
        ...SanityTitleBody
      }
      cultureIs {
        ...SanityTitleBody
      }
      actuation {
        ...SanityCard
      }
    }
  }
`
// TODO: don't hardcode, reference sanity
const wholePersonLeadership = [
  {
    Icon: Favorite,
    color: "primary",
    name: "Acceptance & Belonging",
    description: "As Taiwanese Americans, our beliefs, behaviors, and habits may differ from those of mainstream American culture. An understanding of culture helps us accept ourselves as equally worthy and find our own sense of belonging.",
  },
  {
    Icon: AutoAwesome,
    color: "secondary",
    name: "Identity & Development",
    description:
      "As Taiwanese Americans, our stories are not often represented in mainstream American culture. An understanding of culture helps us make sense of our identities and experiences and develop a sense of self.",
  },
  {
    Icon: RocketLaunch,
    color: "tertiary",
    name: "Leadership",
    description:
      "As Taiwanese Americans, we are uniquely positioned to lead our communities with our mixed heritages and experiences. An understanding of culture empowers us to use these strengths to lift others up.",
  },
]

const ColoredBar = ({ color }: { color: string }) => (
  <Box
    sx={(theme) => ({
      backgroundColor: color,
      borderRadius: 1,
      width: theme.spacing(1),
      height: "100%",
    })}
  />
)

const alternatingColors = ["primary.main", "secondary.main", "tertiary.main"]

export const Head = getPageTitle("Culture")

export default function CulturePage({
  data,
}: PageProps<Queries.CulturePageQuery>) {
  const { sanityCulturePage } = data

  if (!sanityCulturePage)
    throw `No Sanity document for the culture page was found.`

  const icons = [
    <ChatBubble color="primary" fontSize="large" />,
    // @ts-ignore Color tertiary added in module augmentation but doesn't show up here.
    <Twitter color="tertiary" fontSize="large" />,
    <Psychology color="secondary" fontSize="large" />,
  ]

  return (
    <>
      {/* Hero Section */}
      <Section backgroundColor="primary.main" maxWidth="md">
        <Stack
          spacing={3}
          padding={3}
        >
          <Typography variant="h3" color="white" textAlign="center">{sanityCulturePage?.mainHeader}</Typography>
          <PortableText color="white" textAlign="center" content={sanityCulturePage?._rawSubHeader} />
        </Stack>
      </Section>

      {/* Blurb */}
      <Section maxWidth="sm">
        <Stack
          spacing={3}
        >
          <Typography variant="h4" textAlign="center">{sanityCulturePage?.blurb?.title}</Typography>
          <PortableText color="gray" textAlign="center" content={sanityCulturePage?.blurb?._rawBody} />
        </Stack>
      </Section>

      {/* Pillars */}
      {/* TODO copy from index.tsx */}
      <Section>
        <Grid container justifyContent="space-between">
          <Grid
            xs={12}
            lg={5}
            sx={{
              display: { xs: "none", lg: "block" },
            }}
          >
            {/* <Placeholder /> */}
            <VennDiagram />
          </Grid>
          <Grid
            xs={12}
            lg={6}
            sx={{
              padding: { xs: 0, lg: 4 },
            }}
          >
            <Stack spacing={2}>
              <Stack spacing={5}>
                {wholePersonLeadership.map(
                  ({ Icon, color, name, description }) => (
                    <Grid
                      container
                      key={name}
                      columnSpacing={1}
                      rowSpacing={0}
                      sx={{
                        padding: 0,
                      }}
                    >
                      <Grid>
                        {/* @ts-ignore Tertiary added via module augmentation but doesn't show up here. */}
                        <Icon color={color} fontSize="large" />
                      </Grid>
                      <Grid>
                        <Typography variant="h4" color={`${color}.main`}>
                          {name}
                        </Typography>
                      </Grid>
                      <Grid xs={12}>
                        <Typography variant="body1">{description}</Typography>
                      </Grid>
                    </Grid>
                  )
                )}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Section>


      {/* Culture is */}
      {/* backgroundColor is hardcoded to "offwhite" with 0.4 opacity */}
      <Section backgroundColor="#eef2f466">
        {/* TODO don't hardcode text here */}
        <Typography variant="h4" textAlign="center">We believe that culture is...</Typography>
        <Grid padding={3} container justifyContent="center" alignItems="flex-start">
          {sanityCulturePage?.cultureIs?.map((culture, index) => (
            <Grid xs={12} md={4} key={culture?.title}>
              <Stack
                spacing={3}
                padding={3}>
                {icons[index % 3]}
                <Typography variant="h5"> {culture?.title}</Typography>
                <PortableText content={culture?._rawBody} />
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Section>

      {/* Actuation */}
      <Section>
        <Stack spacing={6}>
          <AlternatingContentGrid content={sanityCulturePage?.actuation} />
        </Stack>
      </Section>

    </>
  )
}
