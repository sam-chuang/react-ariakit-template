import { useState } from "react"
import { css } from "@emotion/react"
import { Routes, Route, Outlet, Link } from "react-router-dom"
import {
  Button,
  useMenuBarStore,
  MenuBar,
  useMenuStore,
  Menu,
  MenuButton,
  MenuItem
} from "@ariakit/react"
import Box, { Orientation } from "../box"

//TODO: color scheme
//TODO: header background
//TODO: router menu
export const Header = ({}) => {
  let store = useMenuBarStore()

  let menu = useMenuStore()
  let secondMenu = useMenuStore()

  return (
    <Box
      orientation={Orientation.Horizontal}
      alignX="apart"
      css={css`
        top: 0;
        position: sticky;
        padding: 1rem;
      `}
    >
      <MenuBar store={store}>
        <MenuButton store={menu}>Menu Button</MenuButton>
        <Menu store={menu}>
          <MenuItem>Menu Item Apple</MenuItem>
          <MenuItem>Menu Item BaBa</MenuItem>
        </Menu>
        <MenuButton store={secondMenu}>Menu Button 2</MenuButton>
        <Menu store={secondMenu}>
          <MenuItem>Menu Item Apple</MenuItem>
          <MenuItem>Menu Item BaBa</MenuItem>
        </Menu>
      </MenuBar>
      <Button>User</Button>
    </Box>
  )
}
