import React from "react"
import { Button, ButtonProps } from "@mui/material"
import { Link } from "gatsby"

type LinkButtonProps = ButtonProps & {
  to?: string
}

const LinkButton = React.forwardRef<HTMLButtonElement, LinkButtonProps>(
  ({ to, ...rest }, ref) => (
    <Button
      component={to ? Link : "button"}
      to={to && to.charAt(0) != "/" ? `/${to}` : to}
      ref={ref}
      {...rest}
    />
  )
)

export default LinkButton
