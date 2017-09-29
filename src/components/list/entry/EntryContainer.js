import { connect } from 'react-redux'

import { deleteReminder } from 'actions/ActionCreators'
import Entry from 'components/list/entry/Entry'

function mapStateToProps(state, ownProps) {}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClickDelete: () => {
      console.log('delete')
      dispatch(deleteReminder(ownProps.data.id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Entry)
