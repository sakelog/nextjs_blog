import * as React from 'react'
const rehypeReact = require('rehype-react')

import Img from 'gatsby-image'
import useContentfulImage from '../utils/ContentfulImage'
import { Link } from 'gatsby'

// component再定義
const RenderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    table: (
      props: JSX.IntrinsicAttributes &
        React.ClassAttributes<HTMLTableElement> &
        React.TableHTMLAttributes<HTMLTableElement>
    ) => {
      return (
        <div className="c-table">
          <table {...props}></table>
        </div>
      )
    },
    blockquote: (
      props: JSX.IntrinsicAttributes &
        React.ClassAttributes<HTMLElement> &
        React.BlockquoteHTMLAttributes<HTMLElement>
    ) => {
      return <blockquote className="blockquote" {...props}></blockquote>
    },
    img: (
      props: JSX.IntrinsicAttributes &
        React.ClassAttributes<HTMLElement> &
        React.ImgHTMLAttributes<HTMLElement>
    ) => {
      var ContentfulImgFlg: boolean
      ContentfulImgFlg =
        useContentfulImage({ ...props }.src) === null ? false : true
      const ImgTag = (
        <div style={{ width: '100%', maxWidth: '630px', margin: 'auto' }}>
          {ContentfulImgFlg === true ? (
            <Link to={`${{ ...props }.src}?fm=webp`}>
              <Img
                fluid={useContentfulImage({ ...props }.src)}
                alt={{ ...props }.alt}
                title={{ ...props }.title}
              />
            </Link>
          ) : { ...props }.src.match(/.svg/) === null ? (
            <img
              src={{ ...props }.src}
              alt={{ ...props }.alt}
              title={{ ...props }.title}
              style={{ ...props }.style}
              className={{ ...props }.className}
            />
          ) : (
            <img
              src={{ ...props }.src}
              alt={{ ...props }.alt}
              title={{ ...props }.title}
              style={{ ...props }.style}
              className={{ ...props }.className}
            />
          )}
        </div>
      )
      return ImgTag
    },
  },
}).Compiler

export default RenderAst