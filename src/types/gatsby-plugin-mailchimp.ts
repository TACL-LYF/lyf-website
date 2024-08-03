declare module "gatsby-plugin-mailchimp" {
  export default function addToMailchimp(
      email: string,
      fields?: any,
      endpointOverride?: any
  ): { result: string; msg: string }
}
