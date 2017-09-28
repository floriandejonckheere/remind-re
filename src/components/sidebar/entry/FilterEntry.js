import { connect } from 'react-redux'
import { setFilter } from 'actions/ActionCreators'
import Entry from 'components/sidebar/entry/Entry'

function mapStateToProps(state, ownProps) {
  return {
    active: ownProps.filter === state.filter.filter
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClick: () => {
      dispatch(setFilter(ownProps.filter))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Entry)