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
    <ul className="sl-post-date-list">
      <li>
        <FiCalendar />
        <span className="sl-date">{moment(postdate).format('YYYY年M月D日')}</span>
      </li>
      {validUpdateCheck === true && (
        <li>
          <FiRefreshCw />
          <span className="sl-date">{moment(update).format('YYYY年M月D日')}</span>
        </li>
      )}
    </ul>
  )
}

export default PostDate
