import React from 'react';
import ReactDOM from 'react-dom';

import 'uikit/dist/js/uikit.min'
import 'uikit/dist/js/uikit-icons.min'

import './index.css';
import 'typeface-montserrat'

import registerServiceWorker from './registerServiceWorker';

import AppRouter from './AppRouter';

ReactDOM.render(<AppRouter />, document.getElementById('root'));
registerServiceWorker();
