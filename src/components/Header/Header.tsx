import React, { useState } from "react"

import {
  AppBar,
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  Stack,
  SwipeableDrawer,
  Toolbar,
  ListItemButton,
  ListItemText,
} from "@mui/material"
import { Menu as MenuIcon } from "@mui/icons-material"
import { Link, navigate } from "gatsby"

import Logo from "@components/Logo"
import CTABanner from "./CTABanner"
import HeaderPageLink, { Page } from "./HeaderPageLink"
import { LinkButton } from "@components/Button"

const PAGES: Page[] = [
  {
    text: "About Us",
    subPages: [
      {
        to: "/about-us/leadership",
        text: "Leadership",
      },
      {
        to: "/about-us/culture",
        text: "Approach to Culture",
      },
      {
        to: "/about-us/history",
        text: "History of LYF",
      },
    ],
  },
  {
    text: "LYF Camp",
    subPages: [
      {
        to: "/camp/lyf-camp",
        text: "What is LYF Camp?",
      },
      {
        to: "/camp/faqs",
        text: "FAQs",
      },
    ],
  },
  {
    text: "Get Involved",
    subPages: [
      {
        to: "/get-involved/join-our-team",
        text: "Join Our Team",
      },
      {
        to: "/get-involved/donate",
        text: "Donate",
      },
      {
        to: "/cookbook",
        text: "Cookbook",
      },
    ],
  },
]

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false)

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return
      }

      setDrawerOpen(open)
    }

  const navigateAndCloseDrawer =
    (to?: string) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return
      }

      setDrawerOpen(false)

      if (to) {
        navigate(to)
      }
    }

  return (
    <header>
      <CTABanner />
      <AppBar position="static" color="default">
        <Toolbar sx={{ marginLeft: { xs: 0, md: 4 }, marginRight: 4 }}>
          {/* Menu for smaller screens. Hidden on larger screens */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="Website nav menu"
              aria-controls="drawer-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <SwipeableDrawer
              id="drawer-appbar"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
              onOpen={toggleDrawer(true)}
            >
              <List>
                {PAGES.map((page) => (
                  <React.Fragment key={page.text}>
                    <ListItem key={page.text}>
                      <ListItemText>{page.text}</ListItemText>
                    </ListItem>
                    {page.subPages ? (
                      <List sx={{ pl: 4 }} disablePadding>
                        {page.subPages.map((subPage) => (
                          <ListItemButton
                            key={subPage.text}
                            onClick={navigateAndCloseDrawer(subPage.to)}
                          >
                            <ListItemText>{subPage.text}</ListItemText>
                          </ListItemButton>
                        ))}
                      </List>
                    ) : (
                      <></>
                    )}
                  </React.Fragment>
                ))}
              </List>
            </SwipeableDrawer>
          </Box>

          <Link to="/" style={{ lineHeight: 0 }}>
            <Logo size={50} />
          </Link>

          {/* Menu for larger screens. Hidden on smaller screens */}
          <Stack
            justifyContent="flex-end"
            direction="row"
            spacing={1}
            flexGrow={1}
            display={{
              xs: "none",
              md: "flex",
            }}
          >
            {PAGES.map((page) => (
              <HeaderPageLink key={page.text} page={page} />
            ))}
            <Button
              sx={{ display: "block" }}
              color="primary"
              variant="contained"
              href="https://lyf-registration.tacl.org/"
            >
              Register For Camp
            </Button>
            <LinkButton
              sx={{ display: "block" }}
              color="primary"
              variant="outlined"
              to="/get-involved/donate"
            >
              Donate
            </LinkButton>
          </Stack>
        </Toolbar>
      </AppBar>
    </header>
  )
}
