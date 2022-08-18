import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Button from '@mui/material/Button';
import axios from 'axios';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default Login;

function Login() {
    const router = useRouter();
    const [state, setState] = useState({
        username: "",
        password: "",
        showPassword: false,
    })
    const handleClickShowPassword = () => {
        setState({
            ...state,
            showPassword: !state.showPassword,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const finalSubmit = await axios({
            method: 'post',
            url: "/api/auth",
            data: {
                "username": `${state.username}`,
                "password": `${state.password}`,
            },
            timeout: 1000 * 60,
            headers: {
                'Content-Type': 'application/json',
                Authorization: ' Bearer 3735b0212bf2991d4b855edba14acef236f3b6d91bd6315f592d283783fceddb'
            },
        }).then(
            function (response) {
                const value = response.data.message
                console.log('message', value)
                if (value === 'Invalid Userame and Password') {
                    router.replace('/')
                    setState({ username: '', password: '' })
                } else {
                    router.replace('/Layouts/CommissionModule')
                }
            }
        ).catch(
            function (error) {
                console.log('Show error notification!', error)
            }
        )

    }

    return (
        <>
            <div className="card">
                <h4 className="card-header">Login</h4>
                <div className="card-body">
                    <form >
                        <div className="form-group">
                            <FormControl sx={{ m: 1, width: '45ch' }} variant="standard">
                                <InputLabel htmlFor="standard-adornment-password">Login</InputLabel>
                                <Input
                                    id="standard-adornment-password"
                                    value={state.username || ""}
                                    onChange={(e) => { setState({ ...state, username: e.target.value }) }}
                                />
                            </FormControl>
                            <FormControl sx={{ m: 1, width: '45ch' }} variant="standard">
                                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                <Input
                                    id="standard-adornment-password"
                                    type={state.showPassword ? 'text' : 'password'}
                                    value={state.password || ""}
                                    onChange={(e) => { setState({ ...state, password: e.target.value }) }}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                            >
                                                {state.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </div>

                        <div className="loginButton">
                            <Button color="primary" variant="outlined" className="btn btn-primary" onClick={handleSubmit}>
                                Login
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}  
