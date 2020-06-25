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
  const paginationTag =  numPages !== 1 ? (
      <nav className="c-pagination u-space--mgn--2">
        <div className="sl-pagination-prev u-align--center">
            {!isFirst ? (
              <Link to={prevPage} rel="prev">
                {prevText}
              </Link>
            ) : (
              <span>{prevText}</span>
            )}
          </div>

          <div>
            <ul className="u-list--inline">
              {Array.from({ length: numPages }, (_, i) =>
                i + 1 === currentPage ? (
                  <li
                    key={`pagination-number${i + 1}`}
                    className="c-pagination__number--current"
                  >
                    <span>{i + 1}</span>
                  </li>
                ) : (
                  <li 
                    key={`pagination-number${i + 1}`}
                    className="c-pagination__number--link">
                    <Link
                      to = {pathBase + (i === 0 ? '' : i + 1)}
                    >
                      {i + 1}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="col sl-pagination-next u-align--center">
            {!isLast ? (
              <Link to={nextPage} rel="next">
                {nextText}
              </Link>
            ) : (
              <span className="">{nextText}</span>
            )}
          </div>
      </nav>
  ) : null

  return paginationTag
}

export default Pagination
