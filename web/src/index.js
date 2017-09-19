import React from 'react';
import ReactDOM from 'react-dom';

import 'uikit/dist/js/uikit'
import 'uikit/dist/js/uikit-icons'

import './index.css';
import registerServiceWorker from './registerServiceWorker';

import AppRouter from './AppRouter';

ReactDOM.render(<AppRouter />, document.getElementById('root'));
registerServiceWorker();
