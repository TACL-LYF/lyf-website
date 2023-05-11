import type { GatsbyConfig } from "gatsby"

const sanityConfig = {
  projectId: "68eu2oev",
  dataset: "production",
}

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: sanityConfig,
    },
    {
      resolve: "gatsby-plugin-sanity-image",
      options: sanityConfig,
    },
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          quality: 80,
        },
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Nunito"],
        },
      },
    },
  ],
}

export default config
