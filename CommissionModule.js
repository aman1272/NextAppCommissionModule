import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useRouter } from 'next/router'
import Snackbar from '@mui/material/Snackbar';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import Divider from '@mui/material/Divider';
import ClearIcon from '@mui/icons-material/Clear';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import listValues from "./data/operations.json"
import commissionOption from './data/commisionOption.json'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import forPreviousMonth from './data/forPreviousMonth.json'
import PersonIcon from '@mui/icons-material/Person';
import Avatar from '@mui/material/Avatar';

const CommissionModule = (props) => {
    const previousMonthData = forPreviousMonth.forPreviousMonth

    const router = useRouter()
    const [states, setStates] = useState({
        Product: '',
        Grid: '',
        From: ''
    });
    const [show, showModel] = useState(false)
    const [open, setOpen] = React.useState(false);
    const [openDialog, setOpenDialog] = React.useState(false);
    const handleClose = () => {
        router.push({
            pathname: '/Layouts/AgGridSheet',
            query: {
                product: states.Product,
                grid: states.Grid,
            },
        })
        setOpenDialog(false);
    };
    //       -----------------   For Drawer  --------------------


    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {

        setState({ ...state, [anchor]: open });
    };

    const operatioData = listValues.listValues
    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 280 }}
            role="presentation"
            onKeyDown={toggleDrawer(anchor, false)}
        >

            <Button onClick={toggleDrawer(anchor, false)}><ClearIcon /></Button>
            <Divider />
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={operatioData.map((item) => {
                    return (item.label)
                })}
                style={{ marginTop: '10vh' }}
                size="small"
                onChange={(event, value) => {
                    switch (value) {
                        case 'Update Commission Grid':
                            showModel(true)
                            break;
                        case 'Create Commission Grid':
                            showModel(true)
                            break;
                        case 'Check Commission Grid':
                            showModel(false)
                            setOpen(true);
                            break;
                        case 'Delete Commission Grid':
                            showModel(false)
                            setOpen(true);
                            break;
                        case 'Compute Commission':
                            showModel(false)
                            setOpen(true);
                            break;
                        case 'Reconciliation':
                            showModel(false)
                            setOpen(true);
                            break;
                        default:
                            break;
                    }
                }}
                renderInput={(params) => <TextField {...params} label="Operations" />} />

        </Box>);
    const commisDrop = commissionOption.commissionOption
    const element = commisDrop.listValue
    const changeHandler = (newValue, type) => {
        setStates({ ...states, [type]: newValue.label })
    }
    const action = (
        <React.Fragment>
            <button color="secondary" size="small" onClick={() => {
                setOpen(false);
            }}>
                UNDO
            </button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={() => {
                    setOpen(false);
                }}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );
    return (
        <>

            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={() => {
                    setOpen(false);
                }}
                message="This Function is not Activated"
                action={action}
            />
            <div className="navCommission">
                <div>
                    {['Open'].map((anchor) => (
                        <React.Fragment key={anchor}>
                            <Button onClick={toggleDrawer(anchor, true)}><DoubleArrowIcon className='openDrawerIcon' /></Button>
                            <Drawer
                                anchor={anchor}
                                open={state[anchor]}
                                onClose={toggleDrawer(anchor, false)}
                            >
                                {list(anchor)}
                            </Drawer>
                        </React.Fragment>
                    ))}
                </div>
                <div className="heading">
                    <h1 >Commission Module</h1></div>
                <div className="logOutbtnCommission">
                    <Button color="primary" size='medium' variant="text" onClick={() => {
                        router.replace('/')
                    }} >LogOut</Button>
                </div>
            </div>
            <div className="mainOption">
                <Box>
                    {show && <Box className="box">
                        {commisDrop.map((element, i) => {
                            return (
                                <Autocomplete
                                    key={i}
                                    disablePortal
                                    id="combo-box-demo"
                                    options={element.listValue}
                                    onChange={(event, newValue) => {
                                        const type = element.lebel
                                        changeHandler(newValue, type)
                                    }}

                                    sx={{ width: 600 }}
                                    size="medium"
                                    style={{ marginTop: "15px" }}
                                    renderInput={(params) => <TextField {...params} label={element.lebel} />} />
                            )
                        })
                        }
                        <Button className="submtBtnCommission" color="success" variant="outlined" onClick={((e) => {
                            if (states.From == 'Previous Months') {
                                setOpenDialog(true)
                            } else {
                                router.push({
                                    pathname: '/Layouts/AgGridSheet',
                                    query: { Product: states.Product, Grid: states.Grid, From: states.From },
                                })
                            }

                        })}>Submit</Button>
                        <div>
                            <Dialog
                                open={openDialog}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">
                                    {"Last Six Months Data"}
                                </DialogTitle>
                                <List sx={{ pt: 0 }}>
                                    {previousMonthData.map((email) => (
                                        <ListItem button onClick={() => router.push({
                                            pathname: '/Layouts/AgGridSheet',
                                            query: { Product: 'CV', Grid: states.Grid, From: states.From },
                                        })} key={email} >
                                            <ListItemAvatar>
                                                <Avatar >
                                                    <PersonIcon />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary={email.label} />
                                        </ListItem>
                                    ))}
                                </List>
                                <DialogActions>
                                </DialogActions>
                            </Dialog>
                        </div>
                    </Box>}
                </Box>
            </div>
        </>
    )
}
export default CommissionModule
