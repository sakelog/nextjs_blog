import React from 'react';
import Img, { FluidObject } from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const CONTENTFUL_IMAGE = '//images.ctfassets.net/';

function RemarkImage(props: MyLib.remarkImage.props) {
  const data = useStaticQuery(
    graphql`
      query {
        cfImg: allContentfulAsset {
          nodes {
            file {
              url
            }
            fluid(maxWidth: 630) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    `
  );
  const imgTag = props.src.match(CONTENTFUL_IMAGE) ? (
    <div style={{ width: '100%', maxWidth: '630px', margin: 'auto' }}>
      <Img
        fluid={getfluidSrc(props.src, data.cfImg.nodes)}
        alt={props.alt}
        title={props.title}
        style={props.style}
        className={props.className}
      />
    </div>
  ) : (
    <img
      src={props.src}
      alt={props.alt}
      title={props.title}
      style={props.style}
      className={props.className}
    />
  );
  return imgTag;
}

export default RemarkImage;

function getfluidSrc(src: string, setCfImg: cfImg): FluidObject {
  var result = setCfImg.find((asset) => asset.file.url === src);

  return result === undefined ? null : result.fluid;
}
