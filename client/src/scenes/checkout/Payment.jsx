import React from 'react'
import { Box, Typography } from '@mui/material';
import TextField from "@mui/material/TextField";
const Payment = ({
    values,
    touched,
    errors,
    handleBlur,
    handleChange
}) => {
  return (
    <Box m="30px 0">
        <Box>
            <Typography sx={{ mb: "15px" }} fontSize="18px">Contact Info</Typography>
            <TextField fullWidth type='text' label="email" 
            onBlur={handleBlur} onChange={handleChange} value={values.email} 
            error={!!touched.email&&!!errors.email} name="email" helperText={touched.email&&errors.email} sx={{gridColumn: "span 4"}}/>

            <TextField fullWidth type='text' label="Phone Number" 
            onBlur={handleBlur} onChange={handleChange} value={values.phoneNumber} 
            error={!!touched.phoneNumber&&!!errors.phoneNumber} name="phoneNumber" helperText={touched.phoneNumber&&errors.phoneNumber} sx={{gridColumn: "span 4"}}/>
            
        </Box>
    </Box>
  )
}

export default Payment
