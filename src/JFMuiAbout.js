import * as React from "react"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

/**
 * Display information about me or CurDog LLC.
 * @returns {JSX.Element}
 * @constructor
 */
function JFMuiAbout() {
    return (
        <Container maxWidth="lg" sx={{mt: 4, mb: 4}}>
            <Grid container spacing={3}> {/* Outer box */}
                <Grid item xs={12}> {/* About message */}
                    <Paper variant='elevation'
                           elevation='4'
                           sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
                        <h3>Hi there!</h3>
                        <Typography variant="body2" color="text.secondary" align="left">
                            The SFDemo app calls the API of a domain service to search for apparel{' '}
                            following the instructions in <Link color="inherit" href="https://developer.salesforce.com/docs/commerce/commerce-api/guide/get-started.html">
                            Get Started with the B2C Commerce API</Link>{' '}
                            and <Link color="inherit" href="https://developer.salesforce.com/docs/commerce/commerce-api/guide/api-and-sdk-demo.html">B2C Commerce API and Node.js SDK</Link>.{' '}
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default JFMuiAbout