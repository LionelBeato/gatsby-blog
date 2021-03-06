import React, { useState } from "react"
import { Flex, Container, Button, Grid, Box } from "theme-ui"
/** @jsx jsx */
import { jsx } from "theme-ui"
import "../styles/global.css"
import ReactModal from "react-modal"
import { Query } from "react-apollo"
import { Post } from "../components/Post"
import gql from "graphql-tag"
import {PAGED_QUERY, SIMPLE_QUERY, TOTAL_QUERY} from "../components/allqueries"

// const PAGED_QUERY = gql`
//   query($pageNumber: Int, $pageSize: Int) {
//     findAllPosts(pageNumber: $pageNumber, pageSize: $pageSize) {
//       title
//       date
//       body
//     }
//   }
// `



// this was the original apollo query 
// it's not being used
// const SIMPLE_QUERY = gql`
//   query {
//     posts {
//       title
//       date
//       body
//     }
//   }
// `

const PostQuery = (props) => {


  const passedQuery = props.passedQuery
  // state for pages
  const [page, setPage] = useState({ pageNumber: 0, pageSize: 5 })
  // event listener that will change the current page state, altering the query
  const handleClick = event => {
    const currentPage = event.target.innerHTML
    console.log(currentPage)
    setPage({ pageNumber: currentPage, pageSize: 5 })
  }

  let navArr = []

  const navBuilder = x => {
    for (let i = 0; i <= x; i++) {
      navArr.push(i)
    }
  }

  return (
    <div>
      <Query query={props.passedQuery} variables={page}>
        {({ data, loading, error }) => {
          if (loading) return <span>Loading...</span>
          if (error) return <p>{error.message}</p>

          if (props.passedQuery === PAGED_QUERY) return (
            <div>
              {console.log(`you queried PAGED_QUERY`)}
              {/* simple map higher order function that will render all of our posts */}
             
             
             
              {
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
           }
            </div>
          )

          if (props.passedQuery === SIMPLE_QUERY) return (
            <div>Here are some fruits!</div>
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
        <Query query={TOTAL_QUERY} variables={page}>
          {({ data, loading, error }) => {
            if (loading) return <span>Loading...</span>
            if (error) return <p>{error.message}</p>

            return (
              <div>
                {navBuilder(data.getTotalPages)}
                {console.log(navArr)}
                <Grid gap={2} columns={12}>
                  {navArr.map(el => (
                    <Box><span onClick={handleClick} className="title">{el}</span></Box>
                  ))}
                </Grid>
              </div>
            )
          }}
        </Query>
      </div>
    </div>
  )
}

export default PostQuery
