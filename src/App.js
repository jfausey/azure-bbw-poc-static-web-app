//import './App.css'
// Fonts for Material UI:
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import CssBaseline from '@mui/material/CssBaseline'
import logo from './logo.svg'
import React, { useState, useEffect } from 'react'
//import { API } from 'aws-amplify'
//import awsmobile from "./aws-exports"
import JFLayout from "./JFLayout"

function App() {

  // Render the layout for the app
  return (
      <div>
        <CssBaseline />
        <JFLayout/>
      </div>
  )
}

export default App
