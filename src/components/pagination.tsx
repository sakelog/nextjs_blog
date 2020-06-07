import * as React from 'react'
import { Link } from 'gatsby'

interface PaginationProps {
  numPages: number
  currentPage: number
  pathBase?: string
}

const Pagination = ({ numPages, currentPage, pathBase }: PaginationProps) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? pathBase : pathBase + (currentPage - 1).toString()
  const nextPage = pathBase + (currentPage + 1).toString()

  const prevText = '前へ'
  const nextText = '次へ'
  return (
    <nav className="sl-pagination">
      {numPages !== 1 && (
        <div className="grid-3-middle_md-1">
          <div className="col sl-pagination-prev sl-align-center">
            {!isFirst ? (
              <Link to={prevPage} className="" rel="prev">
                {prevText}
              </Link>
            ) : (
              <span className="">{prevText}</span>
            )}
          </div>

          <div className="col sl-align-center">
            <ul className="sl-inline-list">
              {Array.from({ length: numPages }, (_, i) =>
                i + 1 === currentPage ? (
                  <li
                    key={`pagination-number${i + 1}`}
                    className="sl-page-current"
                  >
                    <span className="">{i + 1}</span>
                  </li>
                ) : (
                  <li key={`pagination-number${i + 1}`} className="sl-page-link">
                    <Link
                      to={pathBase + (i === 0 ? '' : i + 1)}
                      className=""
                    >
                      {i + 1}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="col sl-pagination-next sl-align-center">
            {!isLast ? (
              <Link to={nextPage} rel="next" className="">
                {nextText}
              </Link>
            ) : (
              <span className="">{nextText}</span>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Pagination
