import * as React from 'react'
import { useState } from 'react'

import { CopyToClipboard } from 'react-copy-to-clipboard'

import { graphql, useStaticQuery, Link } from 'gatsby'
import { ContentfulPost } from '../../types/graphql-types'

interface PostType {
  post?: ContentfulPost
}

// Icon
import { FiClipboard } from 'react-icons/fi'

const ShareButton = ({ post }: PostType) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
          }
        }
      }
    `
  )

  const [copiedtext, setCopiedText] = useState<string>('記事のURLをコピー')

  const handleChangeText = (): void => {
    setCopiedText('コピー完了！')
    setTimeout(function () {
      setCopiedText('記事のURLをコピー')
    }, 5000)
  }

  return (
    <div className="p-sharebutton">
      <p className="p-sharebutton__title">SHARE</p>
      <p className="p-sharebutton__icons">
        <CopyToClipboard
          text={`${post.title} ${data.site.siteMetadata.siteUrl}/${post.slug}/`}
        >
          <span className="p-sharebutton__copyurl" onClick={handleChangeText}>
            {copiedtext}
            <FiClipboard />
          </span>
        </CopyToClipboard>
      </p>
    </div>
  )
}

export default ShareButton
