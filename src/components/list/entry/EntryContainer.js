import { connect } from 'react-redux'

import { deleteReminder } from 'actions/ActionCreators'
import Entry from 'components/list/entry/Entry'

function mapStateToProps(state, ownProps) {
  return {
    labels: ownProps.data.labels.map(id => state.labels.labels[id])
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClickDelete: () => {
      dispatch(deleteReminder(ownProps.data.id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Entry)
