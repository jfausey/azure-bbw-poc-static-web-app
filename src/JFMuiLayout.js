/*
Ideas for the Mui* components were borrowed from
https://github.com/mui/material-ui/blob/master/docs/data/material/getting-started/templates/dashboard/Dashboard.js
and refactored into several more granular components.
*/
import * as React from 'react'

/* Material UI (MUI) layout and navigation components */
import {createTheme, ThemeProvider} from '@mui/material/styles'
import Box from '@mui/material/Box'

/* My (other) layout and navigation components */
import JFMuiAppBar from "./JFMuiAppBar"
import JFMuiNavBar from "./JFMuiNavBar"
import JFMuiContentBox from "./JFMuiContentBox"

/**
 * The visual (web page) layout of the web app.
 * @returns {JSX.Element}
 * @constructor
 * This component controls the JFMuiAppBar and JFMuiNavBar components
 */
function JFMuiLayout(props) {

    console.log(`JFMuiLayout`)

    const drawerWidth = 240
    const mdTheme = createTheme()
    const [navBarOpen, setNavBarOpen] = React.useState(true)
    function toggleNavBar(event) { setNavBarOpen(!navBarOpen) }
    const [subApp, setSubApp] = React.useState("sfdemo")
    // function handleActivities(event) { setSubApp("activities") }
    // function handleTicTacToe(event) { setSubApp("tic-tac-toe") }

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex', backgroundColor: 'green'}}>
                <JFMuiAppBar
                    navBarOpen={navBarOpen}
                    drawerWidth={drawerWidth}
                    navBarHandler={toggleNavBar}
                />
                <JFMuiNavBar
                    navBarOpen={navBarOpen}
                    drawerWidth={drawerWidth}
                    navBarHandler={toggleNavBar}
                    setSubApp={setSubApp}
                />
                <JFMuiContentBox
                    partitionKey="0"
                    view={subApp}
                    queryLimit={ (props.queryLimit != null) ? props.queryLimit : 100}
                />
                {/*<JFFooter />*/}
            </Box>
        </ThemeProvider>
    )
}

export default JFMuiLayout