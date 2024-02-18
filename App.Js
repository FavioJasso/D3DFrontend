// app.js is the main entry point for our 8th Wall application. Code here will execute after head.html
// is loaded, and before body.html is loaded.

import './index.css'

import {nextButtonComponent} from './next-button'

AFRAME.registerComponent('next-button', nextButtonComponent())
