import * as React from 'react'
import { Link } from 'gatsby'

import { ContentfulTags } from '../../types/graphql-types'

// Utilities
const kebabCase = require('lodash/kebabCase')

//Icon
import { FiTag } from 'react-icons/fi'

interface TagListType {
  Tags?: Pick<ContentfulTags, 'name' | 'slug'>[]
}

const TagList = ({ Tags }: TagListType) => {
  const tag_list =
    Tags === null ? null : (
      <ul className="p-tag-list">
        <li>
          <FiTag />
        </li>
        {Tags.map((tag, index: number) => (
          <li key={index} className="c-tag-item">
            <Link to={`/tags/${kebabCase(tag.name)}/`}>
              <h5>{tag.name}</h5>
            </Link>
          </li>
        ))}
      </ul>
    )

  return <ul className="p-tag-list">{tag_list}</ul>
}

export default TagList
