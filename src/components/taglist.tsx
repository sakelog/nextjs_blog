import * as React from 'react'
import { graphql, Link } from 'gatsby'

// Utilities
const kebabCase = require('lodash/kebabCase')

//Icon
import { FiTag } from 'react-icons/fi'

interface TagListType {
  Tags: {name?: string , slug?: string}[]
}

const TagList = ({Tags}:TagListType) => {
  const tag_list = Tags.map((tag, index: number) => (
    <li key={index} className="sl-tag-item">
      <Link to={`/tags/${kebabCase(tag.name)}/`}>
        <h5>{tag.name}</h5>
      </Link>
    </li>
  ))

  return (
    <ul className="sl-tag-list">
      <li><FiTag /></li>
      {tag_list}
    </ul>
  )
}

export default TagList