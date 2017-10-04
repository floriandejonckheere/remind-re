import React, { Component } from 'react'
import moment from 'moment'

import background from './background.jpg'

class AlertModal extends Component {
  constructor(props) {
    super(props)

    this.onSnooze = this.onSnooze.bind(this)
    this.onDismiss = this.onDismiss.bind(this)
  }


  render() {
    return (
      <div id="modal-full" className="uk-modal-full" data-uk-modal>
        <div className="uk-modal-dialog">
          <button className="uk-modal-close-full uk-close-large" type="button" data-uk-close />
          <div className="uk-grid-collapse uk-flex-middle uk-height-viewport" data-uk-grid>
            <div className="uk-background-cover uk-visible@m uk-width-1-2@m" style={{backgroundImage: `url(${background})`}} data-uk-height-viewport>
              <div className="uk-light uk-text-center uk-text-small">
                <a href="https://unsplash.com/photos/ukxAK0c2FqM">&copy; @alisaanton</a>
              </div>
            </div>
            <div className="uk-padding-large uk-width-1-1@s uk-width-1-2@m">
              <h1>{this.props.reminder && this.props.reminder.title}</h1>
              <p className="uk-text-meta">{this.props.reminder && moment(this.props.reminder.due).fromNow()}</p>
              <div className="uk-flex uk-flex-bottom uk-flex-between uk-margin-xlarge-top">
                <a className="uk-button uk-button-large uk-button-default" onClick={this.onSnooze}>snooze</a>
                <a className="uk-button uk-button-large uk-button-danger" onClick={this.onDismiss}>dismiss</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  onSnooze() {
    window.UIkit.modal('#modal-full').hide().then(() => {
      this.props.onSnooze();
    })
  }

  onDismiss() {
    window.UIkit.modal('#modal-full').hide().then(() => {
      this.props.onDismiss();
    })
  }
}

export default AlertModal
