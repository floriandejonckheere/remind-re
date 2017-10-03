import { connect } from 'react-redux'

import { updateReminder, deleteReminder } from 'actions/ActionCreators'
import Entry from 'components/list/entry/Entry'

function mapStateToProps(state, ownProps) {
  return {}
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClickDelete: () => {
      dispatch(deleteReminder(ownProps.data.id))
    },
    onChange: (e) => {
      dispatch(updateReminder(ownProps.data.id, {
        title: e.target.elements[0].value,
      }))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Entry)
