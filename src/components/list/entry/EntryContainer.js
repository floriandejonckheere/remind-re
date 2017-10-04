import { connect } from 'react-redux'

import * as Constants from 'actions/Constants'

import {
    updateReminder, deleteReminder, assignLabel, unassignLabel, setAlert, setFilter
  } from 'actions/ActionCreators'
import Entry from 'components/list/entry/Entry'

function mapStateToProps(state, ownProps) {
  return {
    labels: state.labels.labels,
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClickTrigger: () => {
      dispatch(setAlert(ownProps.data.id))
    },
    onClickDelete: () => {
      dispatch(deleteReminder(ownProps.data.id))
    },
    onClickLabel: (id) => {
      dispatch(setFilter(Constants.LABEL_FILTER, id))
    },
    onChange: (e) => {
      dispatch(updateReminder(ownProps.data.id, {
        title: e.target.elements[0].value,
      }))
    },
    onChangeLabel: (labelId) => {
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
