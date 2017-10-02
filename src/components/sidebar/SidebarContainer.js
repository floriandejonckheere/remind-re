import { connect } from 'react-redux'

import { createLabel } from 'actions/ActionCreators'
import Sidebar from 'components/sidebar/Sidebar'

function mapStateToProps(state, ownProps) {
  return {
    labels: state.labels.labels,
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClickAdd: function() {
      dispatch(createLabel({ title: 'new label' }))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar)
