import { connect } from 'react-redux'

import { setFilter, deleteLabel } from 'actions/ActionCreators'
import Entry from 'components/sidebar/entry/Entry'

function mapStateToProps(state, ownProps) {
  return {
    active: (ownProps.filterType === state.filter.filterType && ownProps.filter === state.filter.filter)
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClick: () => {
      dispatch(setFilter(ownProps.filterType, ownProps.filter))
    },
    onClickDelete: (id) => {
      dispatch(deleteLabel(ownProps.filter))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Entry)
