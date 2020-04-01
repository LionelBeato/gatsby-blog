import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Flex, Container, Box } from "theme-ui"
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

const IndexPage = () => (
  <div>
    <Post />
    <Query query={APOLLO_QUERY}>
      {({ data, loading, error }) => {
        if (loading) return <span>Loading...</span>
        if (error) return <p>{error.message}</p>

        return (
          <div>
            {/* simple map higher order function that will render all of our games */}
            {data.posts.map(el => (
              <Post title={el.title} date={el.date} body={el.body}/>
            ))}
          </div>
        )
      }}
    </Query>
  </div>
)

export default IndexPage
