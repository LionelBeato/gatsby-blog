import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const APOLLO_QUERY = gql`
{
posts{
    title
    date
    body
}
}

`


const IndexPage = () => (
  <div>
    <Query query={APOLLO_QUERY}>

      {({ data, loading, error }) => {
        if (loading) return <span>Loading...</span>
        if (error) return <p>{error.message}</p>

        return <div>
          {/* simple map higher order function that will render all of our games */}
          {data.posts.map(el =>
            <div>
              <div><h2>{el.title}</h2></div>
              <div>{el.date}</div>
              <div>{el.body}</div>
            </div>
          )}
        </div>
      }}
    </Query>
  </div>
)

export default IndexPage
