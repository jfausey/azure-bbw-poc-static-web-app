import * as React from "react"
//import {API} from "aws-amplify"
import TextField from '@mui/material/TextField'
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import ClearIcon from '@mui/icons-material/Clear';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SearchIcon from '@mui/icons-material/Search';
import JFMuiSFDemoQueryResultsTable from "./JFMuiSFDemoQueryResultsTable";

/**
 * Perform a query against the activitiesCRUD API
 * @param props - must contain a prop named queryTerm
 * @returns {JSX.Element}
 * @constructor
 */
function JFMuiSFDemoApiQuery(props) {
    //const [query, setQuery] = React.useState(`/sfdemo/${props.queryTerm}`)
    const [query, setQuery] = React.useState(`dresses`)
    const [activities, setActivities] = React.useState(null)
    const [prime, setPrime] = React.useState(true)
    const queryInput = React.useRef(null)

    React.useEffect(() => { queryInput.current.focus()}, [query])

    function resetQuery () { setQuery("term") }

    function handleQuery(event) { setQuery(event.target.value)}

    function displayHelp() {
        const searchSyntaxHelp = 'Try simple apparel terms like shirt, pants, dress, etc.'
        alert(searchSyntaxHelp)
    }

    /**
     * Render the query input form (no form element required)
     * @returns {JSX.Element}
     * @constructor
     */
    function QueryInputForm() {
        return (
            <Grid container spacing={3}> {/* Outer box */}

                {/* TODO: Add something to explain the query syntax! date=yyyymmdd&type=bike&... */}
                <Grid item xs={12}> {/* Text field - the inputRef is IMPORTANT! */}
                    <TextField
                        fullWidth
                        id="sfdemoQuery"
                        label="SFDemo Query"
                        type="text"
                        value={query}
                        inputRef={queryInput}
                        onChange={handleQuery}
                    />
                </Grid> {/* Text field */}

                <Grid item xs={2}> {/* Search button */}
                    <Button variant="contained"
                            startIcon={<SearchIcon />}
                            onClick={performQuery}>Search</Button>
                </Grid> {/* Search button */}

                <Grid item xs={1} md={0} /> {/* Spacer */}

                <Grid item xs={2}> {/* Reset button */}
                    <Button variant="contained"
                            startIcon={<ClearIcon />}
                            onClick={resetQuery}>Clear</Button>
                </Grid> {/* Reset button */}

                <Grid item xs={1} md={0} /> {/* Spacer */}

                <Grid item xs={2}> {/* Spacer */}
                    <Button variant="contained"
                            startIcon={<HelpOutlineOutlinedIcon />}
                            onClick={displayHelp}>Help</Button>
                </Grid>

            </Grid>
        )
    }

    /**
     * Query the activitiesCRUD API
     * See https://docs.amplify.aws/lib/restapi/fetch/q/platform/js/
     * See the displayHelp() method above re: query syntax and examples
     * @param event
     * @returns {Promise<void>}
     */
    async function performQuery(event) {
        /*
        let myInit = {
            headers: {}, // OPTIONAL
            response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
            queryStringParameters: {}
        }
        */
        let myActivities = []
        /* REMOVED THE AWS API CALL. REPLACE IT LATER ON WITH AN AZURE API CALL.
        const baseQuery = `/sfdemo/${query}`
        console.debug(`performQuery(): baseQuery = ${baseQuery}, parms = ${JSON.stringify(myInit.queryStringParameters)}`)
        let apiResult = await API.get('sfdemoAPI', baseQuery, myInit)
        console.debug(`apiResult = ${JSON.stringify(apiResult)}`)
        console.debug(`# apiResults = ${apiResult.data.hits.length}`)
        myActivities.push(...apiResult.data.hits)
        */

        /*
        const [data, setData] = React.useState(' ') // 20221212
        React.useEffect( () => {
            (async function () {
                const { text } = await( await fetch(`/api/apparelSearch?name=Jon`)).json()
                setData(text)
            })()
        })
        */
        //console.debug(`BOOGER: query = ${query}`)
        //let data = await (await fetch(`/api/apparelSearch?name=Jon`)).json()
        let data = await (await fetch(`/api/apparelSearch?${query}`)).text()
        //console.debug(`data = ${data}`)
        const results = JSON.parse(data)
        myActivities.push(...results.hits)
        //console.debug(`myActivities = ${JSON.stringify(myActivities)}`)
        setActivities(myActivities)
    }


    if (prime) { // Prime the page with default query results
        performQuery()
        setPrime(false) // Should only run once
    }
    //console.debug(`activities = ${JSON.stringify(activities)}`)
    const newActivities = activities?.map((activity, i) => {
        let newActivity = {}
        newActivity['id'] = i
        newActivity['name'] = activity.productName
        newActivity['image'] = activity.image.disBaseLink
        newActivity['price'] = activity.price
        return(newActivity)
    })

    return (
        <React.Fragment>
            <QueryInputForm />
            <JFMuiSFDemoQueryResultsTable rows={newActivities} />
        </React.Fragment>
    )
}

export default JFMuiSFDemoApiQuery