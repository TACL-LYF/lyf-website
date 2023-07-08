import * as React from "react"
import { PageProps, graphql } from "gatsby"
import { Stack, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2/Grid2"

import getPageTitle from "@utils/getPageTitle"
import { Section } from "@components/Layout"
import { Dropdown, ImageCarousel } from "@components/Product"
import { SanityButton } from "@components/Button"
import PortableText from "@components/PortableText"
import { QuoteCarousel } from "@components/Quotes"

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
          ...SanityQuote
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
          {/* Images */}
          <Grid xs={12} md={6}>
            <ImageCarousel images={product?.photos} />
          </Grid>

          {/* Descriptions */}
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

              {/* Normally we would use the Payment Link button defined in the Sanity schema but PayPal is being annoying with links so we'll just embed their code instead */}
              {/* <SanityButton content={product?.paymentLinkButton} /> */}
              <form
                action="https://www.paypal.com/cgi-bin/webscr"
                method="post"
                target="_top"
              >
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input
                  type="hidden"
                  name="hosted_button_id"
                  value="W3RPET99WTRW2"
                />
                <input type="hidden" name="currency_code" value="USD" />
                <input
                  type="image"
                  src="https://www.paypalobjects.com/en_US/i/btn/btn_paynow_LG.gif"
                  name="submit"
                  title="PayPal - The safer, easier way to pay online!"
                  alt="Buy Now"
                />
              </form>
              <PortableText content={product?._rawDescription} />
              <Stack>
                {product?.additionalDetails?.map((dropdown, i) => (
                  <Dropdown content={dropdown} key={`dropdown-${i}`} />
                ))}
              </Stack>
            </Stack>
          </Grid>

          {/* Quotes */}
          <Grid xs={12}>
            <QuoteCarousel quotes={product?.quotes} color="primary" />
          </Grid>
        </Grid>
      </Section>
    </>
  )
}
