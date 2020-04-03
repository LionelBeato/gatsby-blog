import React from "react"
import { Flex, Container } from "theme-ui"
/** @jsx jsx */
import { jsx } from "theme-ui"

export const Post = props => {
  return (
    <Container p={4} bg="muted">
      <h2>{props.title}</h2>
      <h4>{props.date}</h4>
      <p>{props.body}</p>
    </Container>
  )
}
