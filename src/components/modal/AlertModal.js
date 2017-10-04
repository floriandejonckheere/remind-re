import React, { Component } from 'react'

import background from './background.jpg'

class AlertModal extends Component {
  render() {
    return (
      <div id="modal-full" className="uk-modal-full" data-uk-modal>
        <div className="uk-modal-dialog">
          <button className="uk-modal-close-full uk-close-large" type="button" data-uk-close />
          <div className="uk-grid-collapse uk-flex-middle uk-height-viewport" data-uk-grid>
            <div className="uk-background-cover uk-visible@m uk-width-1-2@m" style={{backgroundImage: `url(${background})`}} data-uk-height-viewport>
              <a href="https://unsplash.com/photos/ukxAK0c2FqM">&copy; @alisaanton</a>
            </div>
            <div className="uk-padding-large uk-width-1-1@s uk-width-1-2@m">
              <h1>Hand in assignment 1</h1>
              <p className="uk-text-meta">In 4 hours</p>
              <div className="uk-flex uk-flex-bottom uk-flex-between uk-margin-xlarge-top">
                <a className="uk-button uk-button-large uk-button-default">snooze</a>
                <a className="uk-button uk-button-large uk-button-danger">dismiss</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AlertModal
