import React, { useState } from "react"
import { Flex, Container, Button, Grid, Box } from "theme-ui"
/** @jsx jsx */
import { jsx } from "theme-ui"
import "../styles/global.css"
import ReactModal from "react-modal"
import { Query } from "react-apollo"
import { Post } from "../components/Post"
import gql from "graphql-tag"

const PAGED_QUERY = gql`
  query($pageNumber: Int, $pageSize: Int) {
    findAllPosts(pageNumber: $pageNumber, pageSize: $pageSize) {
      title
      date
      body
    }
  }
`
const SIMPLE_QUERY = gql`
  query {
    posts {
      title
      date
      body
    }
  }
`

const PostQuery = () => {
  const [page, setPage] = useState({ pageNumber: 0, pageSize: 5 })
  const handleClick = (event) => {
      const currentPage = event.target.innerHTML;
      console.log(currentPage)
      setPage({pageNumber:currentPage, pageSize:5})
  }

  return (
    <div>
      <Query query={PAGED_QUERY} variables={page}>
        {({ data, loading, error }) => {
          if (loading) return <span>Loading...</span>
          if (error) return <p>{error.message}</p>

          return (
            <div>
              {/* simple map higher order function that will render all of our posts */}
              {Array.from(
                data.findAllPosts.map(el => (
                  // Here I defined a prop for my Post component that lets me pass a class to its body
                  // this class is important for line-clamping (or truncating)
                  <Post
                    bodyStyle="line-clamp"
                    title={el.title}
                    date={el.date}
                    body={el.body}
                  />
                ))
              ).reverse()}
            </div>
          )
        }}
      </Query>

      <div
        sx={{
          maxWidth: 512,
          mx: "auto",
          px: 3,
          py: 4,
        }}
      >
        <Grid gap={2} columns={4}>
          <Box className="title" bg="primary" onClick={handleClick}>
            0
          </Box>
          <Box className="title" bg="muted" onClick={handleClick}>
            1
          </Box>
          <Box className="title" bg="primary" onClick={handleClick}>
            2
          </Box>
          <Box className="title" bg="muted" onClick={handleClick}>
            3
          </Box>
        </Grid>
      </div>
    </div>
  )
}

export default PostQuery
