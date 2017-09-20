import React from 'react';
import ReactDOM from 'react-dom';

import 'uikit/dist/js/uikit'

import 'typeface-montserrat'

import 'font-awesome/fonts/FontAwesome.otf'
import 'font-awesome/fonts/fontawesome-webfont.eot'
import 'font-awesome/fonts/fontawesome-webfont.svg'
import 'font-awesome/fonts/fontawesome-webfont.ttf'
import 'font-awesome/fonts/fontawesome-webfont.woff'
import 'font-awesome/fonts/fontawesome-webfont.woff2'
import 'font-awesome/css/font-awesome.css'

import './index.css';

import registerServiceWorker from './registerServiceWorker';

import AppRouter from './AppRouter';

ReactDOM.render(<AppRouter />, document.getElementById('root'));
registerServiceWorker();
