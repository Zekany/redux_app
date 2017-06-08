import PropTypes from 'prop-types'
import { Link } from 'react-router'
import ReadDayRow from './ReadDayRow'
import Book from 'react-icons/lib/fa/book'
import Check from 'react-icons/lib/fa/check'
import '../../stylesheets/ReadDayList.scss'

const ReadDayList = ({ days, filter, onRemoveDay=f=>f }) => {

  const filteredDays = (!filter || !filter.match(/finished|fiction/)) ?
    days :
    days.filter(day => day[filter])

  const activeFilterStyle = {
    textDecoration: 'none',
    color: 'black'
  }

  return (
    <div className="ski-day-list">
      <table>
        <caption>double click to remove</caption>
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th><Check /></th>
              <th><Book /></th>
            </tr>
            <tr>
              <td colSpan={4}>
                <Link to="/list-days" style={(!filter) ? activeFilterStyle : null}>All Days</Link>
                <Link to="/list-days/finished" activeStyle={activeFilterStyle}>Finished Days</Link>
                <Link to="/list-days/fiction" activeStyle={activeFilterStyle}>Fiction Days</Link>
              </td>
            </tr>
          </thead>
        <tbody>
          {filteredDays.map((day, i) =>
            <ReadDayRow key={i} {...day} onRemoveDay={onRemoveDay} />
          )}
        </tbody>
      </table>
    </div>
  )
}

ReadDayList.PropTypes = {
  filter: PropTypes.oneOf(['finished', 'fiction']),
  onRemoveDay: PropTypes.func,
  days: (props) => (!Array.isArray(props.days))
    ? new Error("ReadDayList days property must be an array")
    : (!props.days.length)
        ? new Error("ReadDayList days array must contain at least one record")
        : null
}

export default ReadDayList
