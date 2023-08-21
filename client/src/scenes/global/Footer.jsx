import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import { shades } from '../../theme';
const Footer = () => {
    const {palette: {neutral}} = useTheme();
  return (
    <Box mt="70px" p="40px 0" backgroundColor={neutral.light}>
        <Box width="80%" margin="auto" display="flex" justifyContent="space-between" flexWrap="wrap" rowGap="40px" columnGap="clamp(20px,30px,40px)">
            <Box width="clamp(20%,30%,40%)">
                <Typography mb="30px" variant="h4" fontWeight='bold' color={shades.secondary[500]} >zppp</Typography>
                <Typography>
                There are few things better in life than a
                 slice of pie. My dentist tells me that chewing bricks is 
                 very bad for your teeth.The delicious aroma from the kitchen
                  was ruined by cigarette smoke.It was her first experience 
                  training a rainbow unicorn. Everyone was curious about the large 
                  white blimp that appeared overnight.
                </Typography>
            </Box>
            <Box>
                <Typography mb="30px" variant="h4" fontWeight='bold' >About Us</Typography>
                <Typography mb="30px">Careers</Typography>
                <Typography mb="30px">About ZPPP Group</Typography>
                <Typography mb="30px">Legal & Privacy</Typography>
                <Typography mb="30px">Our Stores</Typography>
            </Box>
            <Box>
                <Typography mb="30px" variant="h4" fontWeight='bold' >Customer Care</Typography>
                <Typography mb="30px">Help Center</Typography>
                <Typography mb="30px">Track Your Order</Typography>
                <Typography mb="30px">Return & Refund</Typography>
            </Box>
            <Box>
                <Typography mb="30px" variant="h4" fontWeight='bold' >Contact Us</Typography>
                <Typography mb="30px">111 Toronto Rd, ON, Canada</Typography>
                <Typography mb="30px">Email: lalala@qq.com</Typography>
                <Typography mb="30px">+1(648)-111-2222</Typography>
            </Box>
        </Box>
    </Box>
  )
}

export default Footer
