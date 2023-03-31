import * as React from "react"
import { PageProps, graphql } from "gatsby"
import { Stack, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2/Grid2"

import getPageTitle from "@utils/getPageTitle"
import { Section } from "@components/Layout"
import { Dropdown, ImageCarousel } from "@components/Product"
import { SanityButton } from "@components/Button"
import PortableText from "@components/PortableText"

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
          ...SanityDropdown
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
        <Grid container spacing={3}>
          <Grid xs={12} md={6}>
            <ImageCarousel images={product?.photos} />
          </Grid>
          <Grid xs={12} md={6}>
            <Stack alignItems="stretch" spacing={2}>
              {/* Headers */}
              <Stack>
                <Typography variant="h4">{product?.name}</Typography>
                <Typography variant="h5">{product?.subheader}</Typography>
                <Typography variant="h6">{product?.edition}</Typography>
              </Stack>
              {/* Everything Else */}
              <Typography variant="h6">
                {`$${product?.price} ${product?.isDonation && "donation"}`}
              </Typography>
              <SanityButton content={product?.paymentLinkButton} />
              <PortableText content={product?._rawDescription} />
              <Stack>
              {product?.additionalDetails?.map((dropdown, i) => (
                <Dropdown content={dropdown} key={`dropdown-${i}`} />
              ))}
              </Stack>

            </Stack>
          </Grid>
        </Grid>
      </Section>
    </>
  )
}
