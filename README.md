<p align="center">
  <a href="https://lyf.tacl.org/">
    <img alt="LYF Logo" src="https://github.com/TACL-LYF/lyf-website/blob/main/static/lyf-logo-black.png" width="60" />
  </a>
</p>
<h1 align="center">
  TACL-LYF Website
</h1>

## Installation
Everything is already set-up in the [package.json](package.json) so all you have to do is

```
yarn install
```

Follow [the yarn installation docs](https://classic.yarnpkg.com/en/docs/install) if you need to install yarn!

### Gatsby

You will have to install gatsby-cli which you can do with `yarn add -g gatsby-cli`
Their website has a nice [tutorial](https://www.gatsbyjs.org/tutorial/) which I recommend following.

You also can find the original [Gatsby's original README.md here](https://github.com/gatsbyjs/gatsby-starter-hello-world). That doc details a quick look at some file structure and basic files for this repo

## 🚀 Quick start


1.  **Start developing.**

    Navigate into the site’s directory and start it up.

    ```shell
    gatsby develop
    ```

2.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

    Edit `src/pages/index.tsx` to see your site update in real-time!

3.  **Learn more about Gatsby**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

    - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

    - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

## Libraries Used
- [react-spring](https://beta.react-spring.dev/) for animations
- [MUI components](https://mui.com/) for base UI components

## File Structure
### Root Level Files
- [gatsby-config.ts](/gatsby-config.ts): This file contains all the configuration for the Gatsby site including what [plugins](https://www.gatsbyjs.com/plugins) we use and site metadata.
- [gatsby-browser.tsx](/gatsby-browser.tsx): Contains the [APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/ ) we call when events happen client-side on the browser
- [gatsby-ssr.tsx](/gatsby-ssr.tsx): Contains the [APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/) we call when events happen server-side during compilation
- [gatsby-node.tsx](/gatsby-node.tsx): Contains the [APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/) that plugins and we can use to build pages and do other cool things

### Directories
- [/pages/](/pages/): All of the hard-coded pages for the site. Gatsby takes each of these files and converts them to a page with the path `https://sitename.com/[filename]`
- [/components](/components/): All of the components that make up the site! Each folder represents related components such as the [Header](/components/Header/) folder which contains the sub components that make up the Header. Generally if a component is re-ususable it'll have its own subfoler under components
- [/hooks](/hooks/): Hooks are a [React-specific concept](https://reactjs.org/docs/hooks-intro.html) that enable functionality such as state and many other things
