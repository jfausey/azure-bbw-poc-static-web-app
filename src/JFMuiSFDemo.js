import * as React from "react"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import Toolbar from "@mui/material/Toolbar"
import JFMuiCopyright from "./JFMuiCopyright"
import JFMuiSFDemoApiQuery from "./JFMuiSFDemoApiQuery";

/**
 * Render the view for querying and displaying fitness activities retrieved
 * from the activitiesCRUD API and for uploading new activity files, etc.
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function JFMuiSFDemo(props) {
    return (
        <Box
            component="main"
            sx={{
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[900],
                flexGrow: 1,
                height: '100vh',
                overflow: 'auto',
            }}
        >
            <Toolbar/> {/* I am unclear on what this does - something to do with styling? */}
            <Container maxWidth="lg" sx={{mt: 4, mb: 4}}>
                <Grid container spacing={3}> {/* Outer box */}

                    <Grid item xs={12}> {/* Activities */}
                        <Paper
                            sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                height: 600
                            }}
                        >
                            <JFMuiSFDemoApiQuery
                                queryTerm={props.queryTerm}
                                queryLimit={ (props.queryLimit != null) ? props.queryLimit : 100}
                            />
                        </Paper>
                    </Grid> {/* Activities */}

                </Grid>
                <JFMuiCopyright sx={{pt: 4}}/>
            </Container>
        </Box>
    )
}

export default JFMuiSFDemo