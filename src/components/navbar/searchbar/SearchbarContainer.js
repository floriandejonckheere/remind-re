import { connect } from 'react-redux'
import { setFilter } from 'actions/ActionCreators'

import * as Constants from 'actions/Constants'
import Searchbar from 'components/navbar/searchbar/Searchbar'

function mapStateToProps(state, ownProps) {
  return {
    filter: (state.filter.filterType === Constants.TEXT_FILTER ? state.filter.filter : ''),
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onChange: (e) => {
      let filter = e.target.value

      if (filter === undefined || filter === '')
        return dispatch(setFilter(Constants.DATE_FILTER, Constants.FILTER_ALL))

      dispatch(setFilter(Constants.TEXT_FILTER, filter))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Searchbar)
