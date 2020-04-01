import React from "react"
import { Post } from "../components/Post"
import { Container } from "theme-ui"
/** @jsx jsx */
import { jsx } from "theme-ui"

const Test = () => {
  return (
    <Container p={4} bg="muted">
      <h2>This is a test title</h2>
      <h4>test date</h4>
      <p>Adipisicing culpa laborum culpa aute. 
          Consectetur labore consequat elit exercitation 
          in mollit cupidatat in est non adipisicing 
          reprehenderit. Sit nulla sunt consectetur 
          velit excepteur pariatur elit. Velit nulla duis 
          dolore dolor sint. Velit occaecat ipsum eiusmod 
          fugiat reprehenderit laborum dolor ut est aliquip 
          esse.</p>
    </Container>
  )
}

export default Test
