import { useStaticQuery, graphql } from 'gatsby'

export default (assetUrl: any) => {
  const { allContentfulAsset } = useStaticQuery(
    graphql`
      query {
        allContentfulAsset {
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
  )

  return allContentfulAsset.nodes.find(
    (n: { file: { url: any } }) => n.file.url === assetUrl
  ).fluid
}
