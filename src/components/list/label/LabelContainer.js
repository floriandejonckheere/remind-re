import { connect } from 'react-redux'

import Label from 'components/list/label/Label'

function mapStateToProps(state, ownProps) {
  return {
    data: state.labels.labels[ownProps.id]
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
