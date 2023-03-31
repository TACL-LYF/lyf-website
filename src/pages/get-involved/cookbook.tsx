import * as React from "react"
import { PageProps, graphql } from "gatsby"
import { Stack, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2/Grid2"

import getPageTitle from "@utils/getPageTitle"
import { Section } from "@components/Layout"
import { ImageCarousel } from "@components/Product"

export const query = graphql`
  query CookbookPage {
    sanityCookbookPage {
      productReference {
        name
        subheader
        edition
        slug {
          current
        }
        price
        isDonation
        paymentLinkButton {
          ...SanityButton
        }
        _rawDescription
        additionalDetails {
          dropdownHeader
          _rawDropdownBody
        }
        photos {
          ...SanityImageAsset
        }
        quotes {
          name
          _rawContent
          yearsAttendedCamp
        }
      }
    }
  }
`

export const Head = getPageTitle("Cookbook")

export default function CookbookPage({
  data,
}: PageProps<Queries.CookbookPageQuery>) {
  const { sanityCookbookPage } = data
  if (!sanityCookbookPage)
    throw `No Sanity document for the culture page was found.`

  const product = sanityCookbookPage.productReference

  return (
    <>
      <Section>
        <Grid container>
          <Grid xs={12} md={6}>
            <ImageCarousel images={product?.photos} />
          </Grid>
        </Grid>
        <Stack></Stack>
      </Section>
    </>
  )
}
