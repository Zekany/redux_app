import AddDayForm from '../ui/AddDayForm'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { addDay, suggestBookTitles, clearSuggestions } from '../../actions'

const mapStateToProps = (state, props) =>
({
  suggestions: state.bookTitles.suggestions,
  fetching: state.bookTitles.fetching,
  router: props.router
})

const mapDispatchToProps = dispatch =>
({
  onNewDay ({title, date, finished, fiction}) {
    addDay(title, date, finished, fiction)
  },
  onChange (value) {
    if (value) {
      dispatch(
        suggestBookTitles(value)
      )
    } else {
      dispatch(
        clearSuggestions()
      )
    }
  },
  onClear () {
    dispatch(
      clearSuggestions()
    )
  }
})

const Container = connect(mapStateToProps, mapDispatchToProps)(AddDayForm)

export default withRouter(Container)
