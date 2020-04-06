import React, { useState } from "react"
import ReactModal from "react-modal"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { useMutation } from "@apollo/react-hooks"
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
import { Query } from "react-apollo"
import { Post } from "../components/Post"
import gql from "graphql-tag"
/** @jsx jsx */
import { jsx } from "theme-ui"

const APOLLO_QUERY = gql`
  {
    posts {
      title
      date
      body
    }
  }
`

const ADD_POST = gql`
  mutation($title: String, $body: String) {
    createPost(title: $title, body: $body) {
      title
      date
      body
    }
  }
`

const IndexPage = () => {

  const style = {
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
  }


  const [modal, setModal] = useState(false)
  const [addPost, { data }] = useMutation(ADD_POST)
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  const bodyHandler = event => {
    setBody(event.target.value)
  }

  const titleHandler = event => {
    setTitle(event.target.value)
  }

  const handleClick = () => {
    setModal(!modal)
  }

  const handleForm = () => {
    let t = title
    let b = body
    addPost({ variables: { title: t, body: b } })
    handleClick()
    location.reload();
  }

  return (
    <div>
      <ReactModal isOpen={modal}>
        <Box as="form" onSubmit={handleForm}>
          <Label htmlFor="title">Title</Label>
          <Input name="title" mb={3} onChange={titleHandler} />
          <Box></Box>
          <Label htmlFor="body">Body</Label>
          <Textarea name="body" rows="6" mb={3} onChange={bodyHandler} />
          <Button>Submit</Button>
          <Button sx={{ float: "right" }}>Cancel</Button>
        </Box>
      </ReactModal>

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
          onClick={handleClick}
          sx={style}
        >
          New Post
        </button>
      </Flex>

      <Query query={APOLLO_QUERY}>
        {({ data, loading, error }) => {
          if (loading) return <span>Loading...</span>
          if (error) return <p>{error.message}</p>

          return (
            <div>
              {/* simple map higher order function that will render all of our games */}
              {Array.from(data.posts.map(el => (
                <Post title={el.title} date={el.date} body={el.body} />
              ))).reverse()}
            </div>
          )
        }}
      </Query>
    </div>
  )
}

export default IndexPage
