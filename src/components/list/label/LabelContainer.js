import { connect } from 'react-redux'

import * as Contants from 'actions/Constants'
import { setFilter } from 'actions/ActionCreators'
import Label from 'components/list/label/Label'

function mapStateToProps(state, ownProps) {
  return {
    data: state.labels.labels.find(l => l.id === ownProps.id)
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Label)
