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
import Health from './data/AgGrid/health.json'

const AgGridHealth = () => {
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
                "product": `${prevData.product}`,
                "grid": `${prevData.grid}`,
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

    const data = Health.Health[0].Insurer
    console.log('data', data)
    const Insurer = (params) => {
        const [cc, setCc] = React.useState(['']);
        const handleChange = (event) => {
            setCc(event.target.value);
        };
        const finalData = rowData[params.rowIndex]
        finalData.CC = cc
        setRowData(`${finalData}`)
        console.log("CcInCell", rowData)
        // const val = ['<150', '>150']
        return (

            <Box sx={{ width: 'auto' }}>
                <FormControl fullWidth>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={cc}
                        size="small"
                        onChange={handleChange} >
                        {val.map((obj, i) => (
                            <MenuItem value={obj}>{obj}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
        );
    }

    const [columnDefs, setColumnDefs] = useState([
        {
            field: "Insurer_Name", headerName: "Insurer name", width: 140, cellEditorFramework: Insurer, hide: false,
        },
        {
            field: "Insurance_Type", headerName: " Insurance Type",
        },
        {
            field: "Plan_Name", headerName: " Plan Name",
        },
        {
            field: "Premium_Paying_Term", headerName: "Premium Paying Term", width: 135,

        },
        { field: "Age_Of_Policy", headerName: "Age Of Policy", width: 140 },

    ]);


    const [rowData, setRowData] = useState([
        {
            Insurer_Name: "",
            Insurance_Type: "",
            Plan_Name: "",
            Premium_Paying_Term: "",
            Age_Of_Policy: "",

        }, {
            Insurer_Name: "",
            Insurance_Type: "",
            Plan_Name: "",
            Premium_Paying_Term: "",
            Age_Of_Policy: "",
        }, {
            Insurer_Name: "",
            Insurance_Type: "",
            Plan_Name: "",
            Premium_Paying_Term: "",
            Age_Of_Policy: "",
        }, {
            Insurer_Name: "",
            Insurance_Type: "",
            Plan_Name: "",
            Premium_Paying_Term: "",
            Age_Of_Policy: "",
        }, {
            Insurer_Name: "",
            Insurance_Type: "",
            Plan_Name: "",
            Premium_Paying_Term: "",
            Age_Of_Policy: "",
        }, {
            Insurer_Name: "",
            Insurance_Type: "",
            Plan_Name: "",
            Premium_Paying_Term: "",
            Age_Of_Policy: "",
        }, {
            Insurer_Name: "",
            Insurance_Type: "",
            Plan_Name: "",
            Premium_Paying_Term: "",
            Age_Of_Policy: "",
        }, {
            Insurer_Name: "",
            Insurance_Type: "",
            Plan_Name: "",
            Premium_Paying_Term: "",
            Age_Of_Policy: "",
        }, {
            Insurer_Name: "",
            Insurance_Type: "",
            Plan_Name: "",
            Premium_Paying_Term: "",
            Age_Of_Policy: "",
        }, {
            Insurer_Name: "",
            Insurance_Type: "",
            Plan_Name: "",
            Premium_Paying_Term: "",
            Age_Of_Policy: "",
        },])
    const defaultColDef = useMemo(() => {
        return {
            flex: 1,
            minWidth: 140,
            filter: true,
            resizable: true,
            editable: true,

        };
    }, []);



    return (
        <div>
            <div style={{ margin: '2vh 0vh 2vh 0vh' }}><Link href={{ pathname: '/' }}>
                <HomeIcon />
            </Link>
                <Button style={{ float: 'right' }} onClick={handleClick}>Submit</Button></div>
            <div className="ag-theme-alpine" style={{ width: 'auto', height: 550 }}>
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

export default AgGridHealth