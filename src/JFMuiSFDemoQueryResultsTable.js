import * as React from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import {Avatar} from "@mui/material";

// See https://mui.com/components/data-grid/columns/
const columns = [
    {
        field: 'name',
        headerName: 'Product',
        //headerClassName: 'query-results-header',
        description: 'Product name',
        type: 'string',
        flex: 1,
    },
    {
        field: 'image',
        headerName: 'Image',
        //headerClassName: 'query-results-header',
        description: 'Image of product.',
        type: 'string',
        flex: 1,
        renderCell: (params) => {
            console.log(params)
            return (
                <Avatar src={params.value} />
            )
        }
    },
    {
        field: 'price',
        headerName: 'Price',
        //headerClassName: 'query-results-header',
        type: 'number',
        flex: 1,
    },
]

export default function JFMuiSFDemoQueryResultsTable(props) {
    // See https://mui.com/api/data-grid/data-grid/
    // TODO: Paginate - consider server-side pagination if the number of rows
    //  in a search result will exceed 100.  The DataGrid component is limited
    //  to 100 rows/page (here a page is the number of rows retrieved from the
    //  server at a time, NOT the number of rows from a page that are displayed
    //  at a time (=< page size.)
    //  See https://mui.com/components/data-grid/pagination/
    // See https://mui.com/components/data-grid/style/
    // Read about the DataGrid Toolbar and Footer components at
    // https://mui.com/components/data-grid/components/
    // Read about handling row selection at
    // https://mui.com/components/data-grid/selection/

    const [pageSize, setPageSize] = React.useState(5)
    const [totalPrice, setTotalPrice] = React.useState(0)
    const [totalActivities, setTotalActivities] = React.useState(0)
    const [selectionModel, setSelectionModel] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    function handleSelectionChange(newSelectionModel) {
        let price = 0
        newSelectionModel.map(i => (
            price += rows[i]['price']
        ))
        
        //console.debug(`HSC: miles = ${miles}, time = ${time}`)
        setTotalActivities(newSelectionModel.length)
        setTotalPrice(price)
        setSelectionModel(newSelectionModel)
    }

    function turnOffLoadingOverlay() {
        // TODO: Not working - eliminate along with state
        if (loading) setLoading(false)
    }

    let rows = []
    if (props?.rows && props.rows.length > 0) rows = props.rows

    return (
        <Box sx={{
            height: 350,
            width: '100%',
            '& .MuiDataGrid-columnHeaders': {backgroundColor: 'greenyellow'}
        }}>
            <h3>Activities:</h3>
            <DataGrid
                rows={rows}
                columns={columns}
                checkboxSelection
                disableSelectionOnClick
                loading={loading}
                pageSize={pageSize}
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                rowsPerPageOptions={[5, 10, 20]}
                pagination={true}
                onSelectionModelChange={
                    (newSlxnModel) => handleSelectionChange(newSlxnModel)
                }
                selectionModel={selectionModel}
                components={{
                    Toolbar: GridToolbar,
                }}
                componentsProps={{
                    toolbar: {sx: { justifyContent: "center", backgroundColor: "greenyellow" }}
                }}
                //hideFooterPagination={false}
                //hideFooterSelectedRowCount={false}
            />
            {/* Pseudo-footer */}
            <Box sx={{ padding: '10px', display: 'flex', fontSize: 'small', backgroundColor: 'greenYellow'}}>
                <Grid container spacing={3}> {/* Outer box */}
                    <Grid item xs={4}>
                    </Grid> {/* Text field */}
                    <Grid item xs={4}>
                        <b>Avg price of selected items: </b>
                        {(totalActivities > 0 ? totalPrice/totalActivities : 0).toFixed(2)}
                    </Grid> {/* Text field */}
                    <Grid item xs={4}>
                        <b>Total for selected items: </b>
                        {totalPrice.toFixed(2)}
                    </Grid> {/* Text field */}
                </Grid>
            </Box>
            {turnOffLoadingOverlay()}
        </Box>
    )
}