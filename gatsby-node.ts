/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
import path from "path"
import tsconfig from "./tsconfig.json"
import type { GatsbyNode } from "gatsby"

import { getGatsbyImageData } from "gatsby-source-sanity"
import { getGatsbyImageFieldConfig } from "gatsby-plugin-image/graphql-utils"
import { ImageNode } from "gatsby-source-sanity/lib-es5/images/getGatsbyImageProps"

const trimString = (str: string) => str.substring(0, str.length - 2)

// Takes in paths defined in tsconfig.json, strips them of * and then adds them as webpack aliases
export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({
  actions,
}) => {
  let aliases = tsconfig["compilerOptions"]["paths"]
  const webpackAliases: Record<string, string> = {}
  for (let key in aliases) {
    // @ts-ignore Treat aliases as an object
    const value: string = trimString(aliases[key][0])
    webpackAliases[trimString(key)] = path.isAbsolute(value)
      ? value
      : path.resolve(value)
  }
  actions.setWebpackConfig({
    resolve: {
      alias: webpackAliases,
    },
  })
}

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] =
  ({ actions, schema }) => {
    const { createTypes } = actions

    // See the button schema in the CMS repo
    const typeDefs = `
    enum ButtonVariant {
      contained
      outlined
      text
    }
    type SanityButton implements Node {
      text: String
      variant: ButtonVariant!
      link: String
    }
  `

    createTypes(typeDefs)
  }

export const createResolvers: GatsbyNode["createResolvers"] = ({
  createResolvers,
}) => {
  const location = {}
  createResolvers({
    SanityImage: {
      gatsbyImageData: getGatsbyImageFieldConfig(
        (image: ImageNode, args) =>
          // @ts-ignore Ignore args
          getGatsbyImageData(image, args, {
            // Be sure to update in gatsby-config.ts too
            projectId: "68eu2oev",
            dataset: "production",
          }),

        {
          placeholder: {
            type: "SanityGatsbyImagePlaceholder",
            defaultValue: "blurred",
            // Also copy the description from this line if you want that comment in your schema
            // https://github.com/sanity-io/gatsby-source-sanity/blob/bbe8565c0c639797e25b742df4e1dc120c465108/src/images/extendImageNode.ts#L53
            description: `Format of generated placeholder image, displayed while the main image loads.
            BLURRED: a blurred, low resolution image, encoded as a base64 data URI (default)
            DOMINANT_COLOR: a solid color, calculated from the dominant color of the image.
            NONE: no placeholder.`,
          },
          fit: {
            type: "SanityImageFit",
            defaultValue: "fillmax",
          },
        }
      ),
    },
  })
}
