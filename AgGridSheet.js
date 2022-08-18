import React, { useMemo, useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import Link from 'next/link'
import Button from '@mui/material/Button';
import axios from 'axios';
import { useRouter } from 'next/router'
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Motor from './data/AgGrid/motor.json'
// import Health from './data/AgGrid/health.json'
import HealthCol from './data/AgGrid/HealthCol'
import CellData from './data/cellData.json';
import AddCells from './data/AgGrid/addCells.json'
// import life from './data/AgGrid/life.json'
import LifeCol from './data/AgGrid/lifeCol'

const AgGridSheet = () => {
    const urlData = useRouter()
    const prevData = urlData.query;

    const [open, setOpen] = React.useState(false);       //--------------------For Snackbar---------------------------------
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };


    const handleClick = async () => {
        setRowData(rowData)
        const newData = JSON.stringify(rowData)
        console.log('Sending Data', newData)
        alert("Are you want to Submit Data to Server ?")
        const finalSubmit = axios({
            method: 'post',
            url: "http://13.233.236.223:7000/api/v1/commission_grid",
            data: {
                "username": "aman@1234",
                "product": `${prevData.Product}`,
                "grid": `${prevData.Grid}`,
                "data": `${newData}`
            },
            timeout: 1000 * 60,
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(
            function (response) {
                console.log('fulfilled', response.data)
                setOpen(true)
                console.log('FinalData', finalSubmit)
            }
        ).catch(
            function (error) {
                console.log('Show error notification!', error)
            }
        )
    }
    const lifeData = LifeCol
    const motorData = Motor.Motor
    const prod = prevData.Product
    const [columnDefs, setColumnDefs] = useState([])
    const cellsData = CellData.CellData
    let [rowData, setRowData] = useState(cellsData)
    switch (prod) {
        case 'Two Wheeler':
            columnDefs = motorData;
            break;
        case 'Four Wheeler':
            columnDefs = motorData;
            break;
        case 'Health':
            columnDefs = Motor.HealthColumns;
            break;
        case 'Life':
            columnDefs = LifeCol;
            break;
        case 'CV':
            setColumnDefs = [];
            break;
        default:
            break;
    }

    const defaultColDef = useMemo(() => {
        return {
            flex: 1,
            minWidth: 140,
            // autoHeight: true,
            filter: true,
            resizable: true,
            editable: true,
            // wrapText: true,

        };
    }, []);
    const addCel = AddCells.AddCells[0].Motor
    // console.log('AddCells', rowData)

    return (
        <div className="main">
            <div className="sheet" >
                <div className='rightBar' ><Link href={{ pathname: '/Layouts/CommissionModule' }}>
                    <HomeIcon className="homeIcon" />
                </Link>
                    <Button variant="outlined" color="success" className="submitBtn" onClick={handleClick}>Submit</Button>
                </div>
                <div className="ag-theme-alpine" style={{ width: 'auto', height: 552 }} >
                    <AgGridReact
                        rowData={rowData}
                        columnDefs={columnDefs}
                        defaultColDef={defaultColDef}
                        enableRangeSelection={true}
                        suppressMultiRangeSelection={true}
                        enableFillHandle={true}
                        animateRows={true}
                        rowSelection={'multiple'}
                        rowMultiSelectWithClick={false}
                        suppressRowClickSelection={true}
                        cellEditorPopup={true}
                        columnHoverHighlight={true}
                    ></AgGridReact>
                </div>
            </div>
            <Button color="primary" className="addBtn" onClick={(e) => {
                setRowData([...rowData, ...addCel])
                console.log('Final_RowData', rowData)
            }}>AddRows</Button>
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description">
                    <Box sx={style}>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Data Saved Successfully
                        </Typography>
                    </Box>
                </Modal>
            </div>
        </div>
    );
};

export default AgGridSheet