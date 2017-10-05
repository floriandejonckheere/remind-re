import { connect } from 'react-redux'

import * as Constants from 'actions/Constants'
import {
  setFilter,
  clearFilter,
  deleteLabel,
  updateLabel,
  setEdit,
  clearEdit,
} from 'actions/ActionCreators'
import FilterEntry from 'components/filterlist/filterentry/FilterEntry'

function mapStateToProps(state, ownProps) {
  return {
    active: state.filter.filterType === ownProps.filterType && state.filter.filter === ownProps.filter,
    edit: state.app.editType === Constants.LABEL_EDIT && state.app.edit === ownProps.filter,
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onStartEdit: () => {
      dispatch(setEdit(ownProps.filter, Constants.LABEL_EDIT))
    },
    onFinishEdit: () => {
      dispatch(clearEdit())
    },
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
)(FilterEntry)
