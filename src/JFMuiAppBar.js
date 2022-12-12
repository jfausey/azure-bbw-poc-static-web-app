import * as React from 'react'

/* Material UI (MUI) layout and navigation components */
import {styled} from '@mui/material/styles'
import Badge from "@mui/material/Badge"
import IconButton from "@mui/material/IconButton"
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"

/* MUI Icons */
import MenuIcon from '@mui/icons-material/Menu'
import NotificationsIcon from '@mui/icons-material/Notifications'

const AppBar = styled(MuiAppBar, { shouldForwardProp: (prop) => prop !== 'open' })
(({ theme, open, drawerWidth }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: '0', // was drawerWidth
        width: '100%', // was `calc(100% - ${drawerWidth}px)`
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    })
}))

/**
 * The app bar or header of the web app.
 * @param props: Object with properties:
 *   navBarOpen (boolean),
 *   drawerWidth (integer),
 *   navBarHandler (function)
 * @returns {JSX.Element}
 * @constructor
 * This component is controlled by the JFMuiLayout component.
 */
function JFMuiAppBar(props) {

    console.debug(`JFMuiAppBar`)

    function toggleNavBar(event) {
        console.debug(`JFMuiAppBar.toggleNavBar: event.target.value = ${event.target.value}`)
        props.navBarHandler(event.target.value)
    }

    return (
        <AppBar position={"absolute"} open={props.navBarOpen} drawerWidth={props.drawerWidth}>
            <Toolbar sx={{pr: '24px'}} >
                {/*<IconButton edge="start" color="inherit" aria-label="open drawer" onClick={toggleNavBar}*/}
                {/*            sx={{marginRight: '36px', ...(props.navBarOpen && { display: 'none' })}} >*/}
                {/*    <MenuIcon />*/}
                {/*</IconButton>*/}
                <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={toggleNavBar}
                            sx={{marginRight: '36px', ...true}} >
                    <MenuIcon />
                </IconButton>
                <Typography component="h1" variant="h6" color="inherit" align="center" noWrap sx={{ flexGrow: 1 }} >
                    Azure Serverless React Static Web App POC
                </Typography>
                <IconButton color="inherit" onClick={() => alert("Imagine your notifications here!")}>
                    <Badge badgeContent={4} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default JFMuiAppBar