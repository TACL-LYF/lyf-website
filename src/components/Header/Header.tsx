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
import Grid from "@mui/material/Unstable_Grid2"
import { Menu as MenuIcon } from "@mui/icons-material"
import Logo from "@components/Logo"

import CTABanner from "./CTABanner"

type Page = {
  to: string
  text: string
  subPages?: Page[]
}

const PAGES: Page[] = [
  {
    to: "/about-us",
    text: "About Us",
    subPages: [
      {
        to: "/about-us",
        text: "Mission & Values",
      },
      {
        to: "/about-us",
        text: "Cultural Stance",
      },
      {
        to: "/about-us",
        text: "History of LYF",
      },
    ],
  },
  {
    to: "/lyf-camp",
    text: "LYF Camp",
    subPages: [
      {
        to: "/lyf-camp",
        text: "Placeholder",
      },
    ],
  },
  {
    to: "/get-involved",
    text: "Get Involved",
    subPages: [
      {
        to: "/lyf-camp",
        text: "Placeholder",
      },
    ],
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
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
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
              {PAGES.map((page) => (
                <MenuItem key={page.text} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.text}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Logo size={50} />

          {/* Menu for larger screens. Hidden on smaller screens */}
          <Grid
            container
            justifyContent="flex-end"
            spacing={1}
            flexGrow={1}
            display={{
              xs: "none",
              md: "flex",
            }}
          >
            {PAGES.map((page) => (
              <Grid key={page.text}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ display: "block" }}
                  color="inherit"
                >
                  {page.text}
                </Button>
              </Grid>
            ))}
            <Grid>
              <Button
                sx={{ display: "block" }}
                color="primary"
                variant="outlined"
              >
                Register For Camp
              </Button>
            </Grid>

            <Grid>
              <Button
                sx={{ display: "block" }}
                color="primary"
                variant="contained"
              >
                Donate
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  )
}
