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
    <ul className="sl-inline-list">
      <li>
        <small className="sl-date">
          <FiCalendar />
          {moment(postdate).format('YYYY年M月D日')}
        </small>
      </li>
      {validUpdateCheck === true && (
        <li>
          <small className="sl-date">
            <FiRefreshCw />
            {moment(update).format('YYYY年M月D日')}
          </small>
        </li>
      )}
    </ul>
  )
}

export default PostDate
