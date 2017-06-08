import PropTypes from 'prop-types'
import Calendar from 'react-icons/lib/fa/calendar'
import '../../stylesheets/ReadDayCount.scss'
import Book from 'react-icons/lib/fa/book'
import Check from 'react-icons/lib/fa/check'

const ReadDayCount = ({ total = 0, finished = 0, fiction = 0 }) =>
  <div className="ski-day-count">
    <div className="total-days">
      <span>{total}</span>
      <Calendar />
      <span>days</span>
    </div>
    <div className="finished-days">
      <span>{finished}</span>
      <Check />
      <span>finished</span>
    </div>
      <div className="fiction-days">
        <span>{fiction}</span>
        <Book />
        <span>Fiction</span>
    </div>
  </div>

ReadDayCount.PropTypes = {
  total: PropTypes.number,
  finished: PropTypes.number,
  fiction: PropTypes.number
}

export default ReadDayCount
