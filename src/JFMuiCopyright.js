import * as React from 'react'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

function JFMuiCopyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            ©
            <Link color="inherit" href="https://mui.com/">
                CurDog🐾LLC,
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

export default JFMuiCopyright
