import { connect } from 'react-redux'

import { createReminder, deleteReminder } from 'actions/ActionCreators'

function mapStateToProps(state, ownProps) {
  return {
    selection: state.app.selection.map((s) => { return state.reminders.reminders[s] }),
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onDelete: () => {
      return ownProps.selection.map((r) => dispatch(deleteReminder(r.id)))
    },
  }
}

function hoc(component) {
  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(component)
}

export default hoc
