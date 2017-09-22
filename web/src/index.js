import React from 'react';
import ReactDOM from 'react-dom';

import UIkit from 'uikit/dist/js/uikit'
import Icons from 'uikit/dist/js/uikit-icons'

import 'typeface-montserrat'

import './index.css';

import registerServiceWorker from './registerServiceWorker';

import AppRouter from './AppRouter';

window.UIkit = UIkit
UIkit.use(Icons)

ReactDOM.render(<AppRouter />, document.getElementById('root'));
registerServiceWorker();
