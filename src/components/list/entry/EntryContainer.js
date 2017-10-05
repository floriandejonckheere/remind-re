import { connect } from 'react-redux'

import * as Constants from 'actions/Constants'

import {
    updateReminder,
    deleteReminder,
    assignLabel,
    unassignLabel,
    setAlert,
    setFilter,
    setEdit,
    clearEdit,
  } from 'actions/ActionCreators'
import Entry from 'components/list/entry/Entry'

function mapStateToProps(state, ownProps) {
  return {
    labels: state.labels.labels,
    edit: state.app.editType === Constants.REMINDER_EDIT && state.app.edit === ownProps.data.id,
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onStartEdit: () => {
      dispatch(setEdit(ownProps.data.id, Constants.REMINDER_EDIT))
    },
    onFinishEdit: () => {
      dispatch(clearEdit())
    },
    onTrigger: () => {
      dispatch(setAlert(ownProps.data.id))
    },
    onDelete: () => {
      dispatch(deleteReminder(ownProps.data.id))
    },
    onFilterLabel: (id) => {
      dispatch(setFilter(Constants.LABEL_FILTER, id))
    },
    onUpdate: (data) => {
      dispatch(updateReminder(ownProps.data.id, data))
    },
    onLabel: (labelId) => {
      if (ownProps.data.labels.includes(labelId)) {
        dispatch(unassignLabel(ownProps.data.id, labelId))
      } else dispatch(assignLabel(ownProps.data.id, labelId))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Entry)
