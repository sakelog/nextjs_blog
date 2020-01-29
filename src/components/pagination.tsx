import * as React from "react"
import { Link } from "gatsby"

interface PProps {
  numPages:number,
  currentPage:number,
  pathBase?:string,
}

const Pagination = ({ numPages, currentPage, pathBase }:PProps) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? pathBase : pathBase + (currentPage - 1).toString()
  const nextPage = pathBase + (currentPage + 1).toString()

  const prevText = "前へ"
  const nextText = "次へ"
  return (
    <nav className="my-2">
      {numPages !== 1 && (
        <ul className="pagination justify-content-center">
          {!isFirst ? (
            <li className="page-item">
              <Link to={prevPage} className="page-link" rel="prev">
                {prevText}
              </Link>
            </li>
          ) : (
            <li className="page-item disabled">
            <span className="page-link">
              {prevText}
            </span>
          </li>    
          )}

          {Array.from({ length: numPages }, (_, i) =>
            i + 1 === currentPage ? (
              <li
                key={`pagination-number${i + 1}`}
                className="page-item active"
              >
                <span className="page-link">{i + 1}</span>
              </li>
            ) : (
              <li key={`pagination-number${i + 1}`} className="page-item">
                <Link to={pathBase + (i === 0 ? "" : i + 1)} className="page-link">
                  {i + 1}
                </Link>
              </li>
            )
          )}

          {!isLast ? (
            <li className="page-link">
              <Link to={nextPage} rel="next" className="page-item">
                {nextText}
              </Link>
            </li>
          ) : (
            <li className="page-item disabled">
            <span className="page-link">
              {nextText}
            </span>
          </li>    
          )}
        </ul>
      )}
    </nav>
  )
}

export default Pagination
