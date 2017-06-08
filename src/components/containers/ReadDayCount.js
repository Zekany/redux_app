import ReadDayCount from '../ui/ReadDayCount'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    total: state.allReadDays.length,
    finished: state.allReadDays.filter(day => day.finished).length,
    fiction: state.allReadDays.filter(day => day.fiction).length
  }
}

const Container = connect(mapStateToProps)(ReadDayCount)

export default Container
