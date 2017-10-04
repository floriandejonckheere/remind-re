import { connect } from 'react-redux'

import { clearAlert } from 'actions/ActionCreators'
import AlertModal from 'components/modal/AlertModal'

function mapStateToProps(state, ownProps) {
  if (state.app.alert === null) {
    return {}
  } else return {
    reminder: state.reminders.reminders.find(r => r.id === state.app.alert)
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onSnooze: () => {
      dispatch(clearAlert())
    },
    onDismiss: () => {
      dispatch(clearAlert())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AlertModal)
