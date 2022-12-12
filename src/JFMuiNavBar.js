import * as React from 'react'

/* Material UI (MUI) layout and navigation components */
import {styled} from '@mui/material/styles'
import Divider from '@mui/material/Divider'
import IconButton from "@mui/material/IconButton"
import List from '@mui/material/List'
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import ListSubheader from "@mui/material/ListSubheader"
import MuiDrawer from '@mui/material/Drawer'
import Toolbar from "@mui/material/Toolbar"

/* MUI Icons */
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import GridOnIcon from '@mui/icons-material/GridOn' // Tic-tac-toe
import InfoIcon from '@mui/icons-material/Info' // About me?
import ListItemIcon from "@mui/material/ListItemIcon"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const NavBar = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open, drawerWidth }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9)
                }
            })
        }
    })
)

/**
 * The navigation bar of the web app.
 * @param props: Object with properties:
 *   navBarOpen (boolean),
 *   drawerWidth (integer),
 *   navBarHandler (function),
 *   setSubApp (function)
 * @returns {JSX.Element}
 * @constructor
 * This component is controlled by the JFMuiLayout component.
 */
function JFMuiNavBar(props) {

    console.debug(`JFMuiNavBar`)

    function toggleNavBar(event) { props.navBarHandler(event.target.value) }

    function handleAbout(event) { props.setSubApp("about") }

    function handleTicTacToe(event) { props.setSubApp("tic-tac-toe") }

    function handleSFDemo(event) { props.setSubApp("sfdemo") }

    return (
        <NavBar variant="permanent" open={props.navBarOpen} drawerWidth={props.drawerWidth}>
            <Toolbar sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end', px: [1],}} >
                <IconButton onClick={toggleNavBar}>
                    <ChevronLeftIcon />
                </IconButton>
            </Toolbar>
            <Divider />
            <List component="nav">
                <ListSubheader component="div" inset>
                    Apps
                </ListSubheader>
                <ListItemButton onClick={handleSFDemo}>
                    <ListItemIcon>
                        <ShoppingCartIcon/>
                    </ListItemIcon>
                    <ListItemText primary="SFDemo"/>
                </ListItemButton>
                <ListItemButton onClick={handleTicTacToe}>
                    <ListItemIcon>
                        <GridOnIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Tic-tac-toe"/>
                </ListItemButton>
                <ListItemButton onClick={handleAbout}>
                    <ListItemIcon>
                        <InfoIcon />
                    </ListItemIcon>
                    <ListItemText primary="About..."/>
                </ListItemButton>
            </List>
        </NavBar>
    )
}

export default JFMuiNavBar