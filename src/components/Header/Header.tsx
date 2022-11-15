import React, { useState } from "react"

import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material"
import { Menu as MenuIcon } from "@mui/icons-material"
import Logo from "@components/Logo"

import CTABanner from "./CTABanner"

const pages = [
  {
    to: "/about-us",
    text: "About Us",
  },
]

export default function Header() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorElNav(event.currentTarget)
  const handleCloseNavMenu = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorElNav(null)

  return (
    <>
      <CTABanner
        text={"Join our LIVE Virtual Info Session"}
        href={"https://www.facebook.com/groups/291534277601982"}
      />
      <AppBar position="static" color="default">
        <Toolbar>
          {/* Menu for smaller screens. Hidden on larger screens */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="Website nav menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              keepMounted
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page.text} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.text}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Logo size={50} />

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.text}
                onClick={handleCloseNavMenu}
                sx={{ display: "block" }}
                color="inherit"
              >
                {page.text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}
