import { connect } from 'react-redux'

import {
    updateReminder, deleteReminder, assignLabel, unassignLabel, setAlert
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
    onChange: (e) => {
      dispatch(updateReminder(ownProps.data.id, {
        title: e.target.elements[0].value,
      }))
    },
    onChangeLabel: (labelId) => {

      console.log(labelId)
      console.log(ownProps.data.labels)

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
