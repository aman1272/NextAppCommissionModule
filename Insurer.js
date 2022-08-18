import React, { useState } from 'react';
import Box from '@mui/material/Box';

const Insurer = (params) => {
    const [cc, setCc] = useState(['']);
    const option = Health.Health[1].Insurer
    console.log('json dropdownData', option)
    const handleChange = (event) => {
        setCc(event.target.value);
    };
    // const finalData = rowData[params.rowIndex]
    // finalData.CC = cc
    // setRowData(`${finalData}`)
    // console.log("CcInCellInsurer", rowData)
    return (

        <Box sx={{ width: 'auto' }}>
            <FormControl fullWidth>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={cc}
                    size="small"
                    onChange={handleChange} >
                    {option.map((obj, i) => (
                        <MenuItem value={obj.label}>{obj.label}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}
export default Insurer