import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Modal extends Component {
  render() {
    return (
      <div id={this.props.id} data-uk-modal>
        <div className="uk-modal-dialog uk-modal-body">
          <button className="uk-modal-close-default" type="button" data-uk-close />
          {this.props.children}
        </div>
      </div>
    )
  }
}

Modal.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Modal
