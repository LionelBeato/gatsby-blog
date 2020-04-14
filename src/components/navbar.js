import React from "react"
import {
    Button,
    Flex,
    Container,
    Box,
    NavLink,
    Label,
    Input,
    Select,
    Textarea,
    Radio,
    Checkbox,
    Slider,
  } from "theme-ui"
/** @jsx jsx */
import { jsx } from "theme-ui"

  export const NavBar = (props) => (
    <Flex as="nav" p={4}>
    <NavLink href="#!" p={2}>
      Home
    </NavLink>
    <NavLink href="#!" p={2}>
      Blog
    </NavLink>
    <NavLink href="/test" p={2}>
      Test
    </NavLink>
    <button
      onClick={props.click}
      sx={{  
        appearance: "none",
        marginLeft: "auto",
        display: "inline-block",
        textAlign: "center",
        lineHeight: "inherit",
        textDecoration: "none",
        fontSize: "inherit",
        fontWeight: "bold",
        m: 0,
        px: 3,
        py: 2,
        border: 0,
        borderRadius: 4,
        variant: "buttons.primary",
      }}
    
    >
      New Post
    </button>
  </Flex>

)

