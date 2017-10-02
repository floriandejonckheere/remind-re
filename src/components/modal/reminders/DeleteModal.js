import React, { Component } from 'react'

import Modal from 'components/modal/Modal'

class DeleteModal extends Component {
  render() {
    return (
      <Modal id="modal-delete-reminder">
        <h3 className="uk-modal-title">Delete {this.props.selection.length} reminders</h3>

        <div className="uk-modal-body">
          Are you sure you want to delete the following reminders:
        </div>

        <div>
          <button className="uk-button uk-button-primary" type="button" onClick={this.props.onDelete}>Delete</button>
        </div>
      </Modal>
    )
  }
}

export default DeleteModal
