import * as React from "react"
import { Link } from "gatsby"

interface Props {
  numPages:number,
  currentPage:number,
  pathBase?:string,
}

const Pagination = ({ numPages, currentPage, pathBase }:Props) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? pathBase : pathBase + (currentPage - 1).toString()
  const nextPage = pathBase + (currentPage + 1).toString()

  const prevText = "前へ"
  const nextText = "次へ"

  return(
    <nav>
    {numPages !== 1 && (
      <div className="pagination d-flex flex-column flex-sm-row mt-2">
        {!isFirst ? (
            <Link to={prevPage} rel="prev" className="prev-link">
              {prevText}
            </Link>
            ) : (
              <span className="disabled prev-link">
                {prevText}
              </span>   
          )}
        <ul className="page-number-links">
          {Array.from({ length: numPages }, (_, i) =>
            i + 1 === currentPage ? (
              <li
                key={`pagination-number${i + 1}`}
                className="active"
              >
                <span>{i + 1}</span>
              </li>
            ) : (
              <li key={`pagination-number${i + 1}`}>
                <Link to={pathBase + (i === 0 ? "" : i + 1)}>
                  {i + 1}
                </Link>
              </li>
            )
          )}
        </ul>
        {!isLast ? (
          <Link to={nextPage} rel="next" className="next-link">
            {nextText}
          </Link>
          ) : (
            <span className="disabled next-link">
              {nextText}
            </span>
        )}
      </div>
    )}
    </nav>
  )
}

export default Pagination;
/*
import * as React from "react"
import { Link } from "gatsby"

interface PaginationProps {
  numPages:number,
  currentPage:number,
  pathBase?:string,
}

const Pagination = ({ numPages, currentPage, pathBase }:PaginationProps) => {
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
              <Link to={prevPage} rel="prev">
                {prevText}
              </Link>
            </li>
          ) : (
            <li className="page-item disabled">
            <span>
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
                <span>{i + 1}</span>
              </li>
            ) : (
              <li key={`pagination-number${i + 1}`} className="page-item">
                <Link to={pathBase + (i === 0 ? "" : i + 1)}>
                  {i + 1}
                </Link>
              </li>
            )
          )}

          {!isLast ? (
            <li>
              <Link to={nextPage} rel="next" className="page-item">
                {nextText}
              </Link>
            </li>
          ) : (
            <li className="page-item disabled">
            <span>
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
*/
