import * as React from "react"
import { Link as MuiLink, LinkProps, Stack, Typography } from "@mui/material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { Link as GatsbyLink } from "gatsby"
import { animated } from "@react-spring/web"

import useBoop from "@hooks/useBoop"

const AnimatedIcon = animated(ArrowForwardIcon)

type LinkWithIconProps = LinkProps & {
  to?: string
  text: string
}

const LinkWithIcon = React.forwardRef<HTMLAnchorElement, LinkWithIconProps>(
  ({ to, text, justifyContent, ...rest }, ref) => {
    const [boopStyles, trigger] = useBoop({ x: 3, scale: 1.1 })

    return (
      <MuiLink
        component={to ? GatsbyLink : "a"}
        to={to && to.charAt(0) != "/" ? `/${to}` : to}
        ref={ref}
        onMouseEnter={trigger}
        {...rest}
      >
        <Stack direction="row" justifyContent={justifyContent} alignItems="center" spacing={1}>
          <Typography variant="h6">{text}</Typography>
          <AnimatedIcon style={boopStyles} fontSize="small" />
        </Stack>
      </MuiLink>
    )
  }
)

export default LinkWithIcon
