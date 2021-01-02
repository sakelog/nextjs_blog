import React from 'react';
import Img, { FluidObject } from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { cfImg } from '../@types/global';

const CONTENTFUL_IMAGE = '//images.ctfassets.net/';

function RemarkImage(props: { src: string; alt: string; title: string }) {
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
      />
    </div>
  ) : (
    <img src={props.src} alt={props.alt} title={props.title} />
  );
  return imgTag;
}

export default RemarkImage;

function getfluidSrc(src: string, setCfImg: cfImg): FluidObject {
  var result = setCfImg.find((asset) => asset.file.url === src);

  return result === undefined ? null : result.fluid;
}
