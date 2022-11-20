import React from "react"
import { Menu, MenuItem } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { navigate } from "gatsby"

import LinkButton from "@components/Button/LinkButton"

export type Page = {
  to?: string // if we have subPages, then we don't link to anything
  text: string
  subPages?: Page[]
}

type HeaderPageLinkProps = {
  page: Page
}

export default function HeaderPageLink({ page }: HeaderPageLinkProps) {
  const { to, text, subPages } = page
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) =>
    setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)

  // id and aria-* props necessary for accessibility purposes.
  const textHypenated = text.replaceAll(" ", "-").toLocaleLowerCase()
  const id = `button-to-${textHypenated}`
  const menuId = `button-menu-to-${textHypenated}`

  return (
    <>
      <LinkButton
        id={id}
        aria-controls={open ? `button-menu-to-${to}` : undefined}
        aria-haspopup="true"
        aria-hasexpanded={open ? "true" : undefined}
        onClick={handleClick}
        to={to}
        href={to && to.startsWith("http") ? to : undefined}
        color="inherit"
        endIcon={subPages ? <ExpandMoreIcon /> : <></>}
      >
        {text}
      </LinkButton>
      {subPages ? (
        <Menu
          id={menuId}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": id,
          }}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          {subPages.map((subPage, index) => (
            <MenuItem key={`${id}-${index}`} onClick={handleClose}>
              {subPage.text}
            </MenuItem>
          ))}
        </Menu>
      ) : (
        <></>
      )}
    </>
  )
}
