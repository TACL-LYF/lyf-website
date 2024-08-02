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
    "gatsby-plugin-netlify",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          quality: 80,
        },
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://tacl.us7.list-manage.com/subscribe/post?u=723f6baf2c99017f0ff638067&amp;id=2bd94e4a2c&amp;f_id=00c2f8e4f0",
        timeout: 5000,
      },
    },
    "gatsby-transformer-sharp",
  ],
}

export default config
