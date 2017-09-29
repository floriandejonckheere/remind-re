import { connect } from 'react-redux'
import Sidebar from 'components/sidebar/Sidebar'

function mapStateToProps(state, ownProps) {
  return {
    labels: state.labels.labels,
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)
