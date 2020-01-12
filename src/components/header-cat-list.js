import React from "react"
import { useStaticQuery,graphql,Link } from "gatsby"

// Utilities
import kebabCase from "lodash/kebabCase"

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
    return(
        <ul className="navbar-nav">{
            categorys.map( (category) =>
                <li key={category.fieldValue} className="nav-item">
                    <Link to={`/category/${kebabCase(category.fieldValue)}/`} className="nav-link">
                        {category.fieldValue}
                    </Link>
                </li>
            )
        }</ul>
    )
}