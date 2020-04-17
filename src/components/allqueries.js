import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import gql from "graphql-tag"


 export const PAGED_QUERY = gql`
  query($pageNumber: Int, $pageSize: Int) {
    findAllPosts(pageNumber: $pageNumber, pageSize: $pageSize) {
      title
      date
      body
    }
  }
`

export const TOTAL_QUERY = gql`
  query($pageNumber: Int, $pageSize: Int) {
    getTotalPages(pageNumber: $pageNumber, pageSize: $pageSize)
  }
`


// this was the original apollo query 
// it's not being used
export const SIMPLE_QUERY = gql`
  query {
    posts {
      title
      date
      body
    }
  }
`



