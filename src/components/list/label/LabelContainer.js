import { connect } from 'react-redux'

import * as Contants from 'actions/Constants'
import { setFilter } from 'actions/ActionCreators'
import Label from 'components/list/label/Label'

function mapStateToProps(state, ownProps) {
  return {
    data: state.labels.labels[ownProps.id]
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClick: () => {
      dispatch(setFilter(Contants.LABEL_FILTER, ownProps.id))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Label)
