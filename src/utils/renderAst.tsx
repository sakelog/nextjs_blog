import * as React from 'react'
const rehypeReact = require('rehype-react')

import Img from 'gatsby-image'
import useContentfulImage from '../utils/ContentfulImage'

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
        <div className="sl-responsive-table">
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
      ContentfulImgFlg = (useContentfulImage({...props}.src)) === null ? false : true
      const ImgTag = (
        <div style={{width: '100%', maxWidth: '630px', margin: 'auto'}}>
          {ContentfulImgFlg === true ? (
            <Img
              fluid={useContentfulImage({...props}.src)}
              alt={{...props}.alt}
              title={{...props}.title}
            />
          ) : (
            <img
              src={{...props}.src}
              alt={{...props}.alt}
              title={{...props}.title}
              style={{...props}.style}
            />
          )}
        </div>
      )
      return ImgTag
    },
  },
}).Compiler

export default RenderAst
