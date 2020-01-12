import React from "react"
import { useStaticQuery,graphql,Link } from "gatsby"

const _ = require("lodash")

export default () => {
    const data = useStaticQuery(
        graphql`
        query {
            allMarkdownRemark(limit: 2000) {
                group(field: frontmatter___category) {
                    fieldValue
                }
            }
        }
        `
    )
    const categorys = data.allMarkdownRemark.group
    console.log(categorys[0].fieldValue)
    return(
        <ul className="navbar-nav">{
            categorys.map( (category) =>
                <li key={category.fieldValue} className="nav-item">
                    <Link to={`/category/${_.kebabCase(category.fieldValue)}/`} className="nav-link">
                        {category.fieldValue}
                    </Link>
                </li>
            )
        }</ul>
    )
}