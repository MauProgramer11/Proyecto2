// src/components/FilterBar.js
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const FilterBar = ({ onFilter }) => {
    const [name, setName] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const handleFilter = () => {
        onFilter({
            name: name.trim(),
            minPrice: minPrice.trim() ? parseFloat(minPrice) : null,
            maxPrice: maxPrice.trim() ? parseFloat(maxPrice) : null,
        });
    };

    return (
        <Box
            sx={{
                display: 'flex',
                gap: 2,
                marginBottom: 2,
            }}
        >
            <TextField
                label="Search by name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
            />
            <TextField
                label="Min price"
                type="number"
                variant="outlined"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                fullWidth
            />
            <TextField
                label="Max price"
                type="number"
                variant="outlined"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                fullWidth
            />
            <Button variant="contained" onClick={handleFilter}>
                Filter
            </Button>
        </Box>
    );
};

export default FilterBar;
