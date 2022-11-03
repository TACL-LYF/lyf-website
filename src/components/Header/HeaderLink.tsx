import React from "react"
import { navigate } from "gatsby"
import { MenuItem, MenuItemProps, Typography } from "@mui/material"

type HeaderLinkProps = MenuItemProps & {
  to: string
  text: string
}


export default function HeaderLink({ to, text, onClick, ...rest }: HeaderLinkProps) {
  const handleOnClick: React.MouseEventHandler<HTMLLIElement> = (event) => {
    if (onClick) onClick(event)
    navigate(to)
  }

  return (
    <MenuItem onClick={handleOnClick} {...rest}>
      <Typography textAlign="center">{text}</Typography>
    </MenuItem>
  )
}
