import * as React from "react"
import { HeadFC } from "gatsby"

export default function getPageTitle(title: string): HeadFC {
  return () => <title>{title} | TACL LYF</title>
}
