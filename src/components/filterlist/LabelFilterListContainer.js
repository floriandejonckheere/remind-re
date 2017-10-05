import { connect } from 'react-redux'

import { createLabel } from 'actions/ActionCreators'
import LabelFilterList from 'components/filterlist/LabelFilterList'

function mapStateToProps(state, ownProps) {
  return {
    labels: state.labels.labels,
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClickAdd: function() {
      dispatch(createLabel())
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LabelFilterList)
