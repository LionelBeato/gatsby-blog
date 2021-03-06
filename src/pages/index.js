import React, { useState } from "react"
import ReactModal from "react-modal"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { useMutation } from "@apollo/react-hooks"
import { useQuery } from "@apollo/react-hooks"
import {
  Button,
  Grid,
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
import { NavBar } from "../components/navbar"
import gql from "graphql-tag"
/** @jsx jsx */
import { jsx } from "theme-ui"
import "../styles/global.css"
import LINKS_PER_PAGE from "../apollo/constants"
import PostQuery from "../components/postquery"
import {PAGED_QUERY, SIMPLE_QUERY} from "../components/allqueries"


const ADD_POST = gql`
  mutation($title: String, $body: String) {
    createPost(title: $title, body: $body) {
      title
      date
      body
    }
  }
`

const IndexPage = ({pageNumber, pageSize}) => {


  // these are my hooks
  // const [pageNumber, setPageNumber] = useState(0)
  // const [pageSize, setPageSize] = useState(5)
  const [modal, setModal] = useState(false)
  const [addPost, { data }] = useMutation(ADD_POST)
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  // these are my handlers
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
    window.location.reload()
  }

  // this is the jsx
  return (
    <div>
      {/* this is my modal code */}
      <ReactModal isOpen={modal}>
        <Box as="form" onSubmit={handleForm}>
          <Label htmlFor="title">Title</Label>
          <Input name="title" mb={3} onChange={titleHandler} />
          <Box></Box>
          <Label htmlFor="body">Body</Label>
          <Textarea name="body" rows="6" mb={3} onChange={bodyHandler} />
          <Button>Submit</Button>
          <Button onClick={handleClick} sx={{ float: "right" }}>
            Cancel
          </Button>
        </Box>
      </ReactModal>

      <NavBar click={handleClick} />


      <PostQuery passedQuery={PAGED_QUERY}/>

     

   
    </div>
  )
}

export default IndexPage
