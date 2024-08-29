// src/components/Footer.js
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Footer = () => {
    return (
        <Box sx={{ textAlign: 'center', padding: '1rem', backgroundColor: '#1976d2', color: 'white' }}>
            <Typography variant="body1">© 2024 My E-Commerce</Typography>
        </Box>
    );
};

export default Footer;
