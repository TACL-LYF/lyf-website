/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
import path from "path"
import tsconfig from "./tsconfig.json"
import type { GatsbyNode } from "gatsby"

const trimString = (str: string) => str.substring(0, str.length - 2)

// Takes in paths defined in tsconfig.json, strips them of * and then adds them as webpack aliases
export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({ actions }) => {
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

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] = ({actions, schema}) => {
  const { createTypes } = actions

  // See the button schema in the CMS repo
  const typeDefs = `
    enum ButtonVariant {
      contained
      outlined
      text
    }
    type SanityButton implements Node {
      text: String!
      variant: ButtonVariant!
      link: String!
    }
  `

  createTypes(typeDefs)
}
