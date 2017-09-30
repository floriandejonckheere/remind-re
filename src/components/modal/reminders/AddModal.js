import React, { Component } from 'react'
import Modal from 'components/modal/Modal'

class AddModal extends Component {
  render() {
    return (
      <Modal id="modal-add-reminder">
        <h3 className="uk-modal-title">Add reminder</h3>

        <div className="uk-modal-body">
          <input type="text" className="uk-input" placeholder="Title" />
          <p/>
          <input type="text" className="uk-input" placeholder="Schedule" />
        </div>

        <div>
          <button className="uk-button uk-button-primary" type="button">Add</button>
        </div>
      </Modal>
    )
  }
}

export default AddModal
