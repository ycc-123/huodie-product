import React from 'react'
import ReactDOM from 'react-dom' 
import FastClick from 'fastclick'

import AppRouter from './router/AppRouter'

import 'lib-flexible'
import 'assets/css/border.css'
import 'assets/css/reset.css'
/* import 'lib-flexible' */

FastClick.attach(document.body)

ReactDOM.render(<AppRouter />, document.getElementById('root'))