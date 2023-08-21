import React, { useState } from 'react'
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import {Box, InputBase, Typography, IconButton, Divider} from "@mui/material";

const Subscribe = () => {
    const [email,setEmail] = useState("");
    // console.log("🚀 ~ file: Subscribe.jsx:7 ~ Subscribe ~ email:", email)
    
  return (
    <Box
        width="80%"
        margin="80px auto"
        textAlign="center"
    >
        <IconButton>
            <MarkEmailReadOutlinedIcon fontSize="large" />
        </IconButton>
        <Typography variant='h3'>Subscribe To Get More Info</Typography>
        <Typography>Sign up for email updates and promotions</Typography>
        <Box
            p="2px 4px"
            m="10px auto"
            display="flex"
            alignItems="center"
            width="75%"
            backgroundColor = "#F3F3F3"
        >
            <InputBase
                sx={{ml:1, flex:1}}
                placeholder='Enter Email'
                onChange={(e)=> setEmail(e.target.value)}
                value={email}

            />
            <Divider sx={{height:28, m:0.5}} orientation='vertical'/>
            <Typography fontWeight="bold" sx={{":hover" :{cursor:"pointer"}}}>Subscribe</Typography>
        </Box>
    </Box>
  )
}

export default Subscribe
