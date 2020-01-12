import React from "react"
import { Link } from "gatsby"

const Pagination = ({numPages,currentPage}) => {
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()
    return(
        <nav className="my-2">
        {numPages !== 1 && (
            <ul className="pagination justify-content-center">
            {!isFirst && (
                <li className ="page-item">
                    <Link to={prevPage} className="page-link" rel="prev">
                    前へ
                    </Link>
                </li>
            )}

            {Array.from({ length: numPages}, (_, i) => (
                i+1 === currentPage ? (
                <li key={`pagination-number${i + 1}`} className="page-item active">
                    <span className="page-link">{ i+1 }</span>
                </li>
                ) : (
                <li key={`pagination-number${i + 1}`} className="page-item">
                    <Link to={`/${i === 0 ? "" : i + 1}`} className="page-link">
                    {i+1}
                    </Link>
                </li>
                )
            ))}
    
            {!isLast && (
                <li className="page-link">
                <Link to={nextPage} rel="next" className="page-item">
                    次へ
                </Link>
                </li>
            )}
            </ul>
        )} 
        </nav>
    )
}

export default Pagination
