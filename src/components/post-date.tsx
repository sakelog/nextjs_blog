import * as React from 'react'
import * as moment from 'moment'

// Icons
import { FiCalendar, FiRefreshCw } from 'react-icons/fi'

interface PostDateType {
  postdate: string
  update: string
}

const PostDate = ({ postdate, update }: PostDateType) => {
  var validUpdateCheck = moment(update, 'YYYY年M月D日').isValid()

  return (
    <ul className="c-post-date">
      <li className="c-post-date__date-wrapper">
        <FiCalendar />
        <span className="c-post-date__date">{moment(postdate).format('YYYY年M月D日')}</span>
      </li>
      {validUpdateCheck === true && (
        <li className="c-post-date__date-wrapper">
          <FiRefreshCw />
          <span className="c-post-date__date">{moment(update).format('YYYY年M月D日')}</span>
        </li>
      )}
    </ul>
  )
}

export default PostDate
