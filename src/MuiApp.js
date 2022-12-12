import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import CssBaseline from '@mui/material/CssBaseline'
import React from 'react'
import JFMuiLayout from "./JFMuiLayout"

function MuiApp() {
  return (
      <React.Fragment>
        <CssBaseline />
        <JFMuiLayout queryLimit={100} />
      </React.Fragment>
  )
}

export default MuiApp
