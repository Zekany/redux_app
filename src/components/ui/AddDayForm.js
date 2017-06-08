import PropTypes from 'prop-types'
import Autocomplete from './Autocomplete'
import '../../stylesheets/AddDayForm.scss'

const AddDayForm = ({suggestions = [], onNewDay = f => f, onChange = f => f, onClear = f => f, fetching = false, router}) => {
  let _title, _date, _finished, _fiction
  const submit = e => {
    e.preventDefault()
      onNewDay({
          title: _title.value,
          date: _date.value.toString(),
          finished: _finished.checked,
          fiction: _fiction.checked
      })

    const addAnother = confirm(`${_title.value} on ${_date.value.toString()} added. Add another?`)
    if (!addAnother) {
      router.push('/')
    }

    _title.value = ''
    _date.value = ''
    _finished.checked = false
    _fiction.checked = false
  }

  return (
    <form onSubmit={submit} className="add-day">
      <label htmlFor="date">Title</label>

      <Autocomplete ref={input => _title = input}
                    suggestions={suggestions}
                    onChange={() => onChange(_title.value)}
                    fetching={fetching}
                    onClear={onClear}
      />

      <label htmlFor="date">Date</label>
      <input id="date"
             type="date"
             ref={input => _date = input}
             required />

      <div>
        <input id="finished-day"
               ref={input => _finished = input}
               type="checkbox"/>
        <label htmlFor="finished-day">Finished</label>
      </div>

      <div>
        <input id="fiction-day"
               ref={input => _fiction = input}
               type="checkbox"/>
        <label htmlFor="fiction-day">Fiction</label>
      </div>

      <button>Add Day</button>

    </form>
  )
}

AddDayForm.PropTypes = {
  suggestions: PropTypes.array,
  onNewDay: PropTypes.func,
  onChange: PropTypes.func,
  onClear: PropTypes.func,
  router: PropTypes.object
}

export default AddDayForm
