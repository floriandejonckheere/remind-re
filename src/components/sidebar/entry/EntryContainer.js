import { connect } from 'react-redux'

import { setFilter, clearFilter, deleteLabel, updateLabel } from 'actions/ActionCreators'
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
      dispatch(clearFilter())

      dispatch(deleteLabel(ownProps.filter))
    },
    onChange: (e) => {
      dispatch(updateLabel(ownProps.filter, {
        title: e.target.value
      }))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Entry)
