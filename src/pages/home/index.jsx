import React from 'react'
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
// import { LocalizationProvider, DatePicker } from '@mui/lab';


const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];


const Index = () => {
    const theme = useTheme();

  return (
    <Card container sx={{ height:'40vh',padding:'50px 10px' }}>
        <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={4}>
          <Card sx={{ maxWidth: 345 }}>
                  <CardContent>
                   <CardMedia
                    component="img"
                    height="140"
                    image="https://thumbs.dreamstime.com/b/steam-train-engine-beautiful-red-railway-passing-lush-green-british-forest-55435070.jpg"
                    alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                           Booking You Seat
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                           (One Way)
                        </Typography>
                    </CardContent>
                 </CardContent>
                </Card>
          </Grid>
          <Grid container item xs={8} sx={{padding:'50px 10px',}}>
                <Grid item xs={6}>
                    <TextField
                    id="outlined-select-currency"
                    select
                    label="From"
                    defaultValue="EUR"
                    fullWidth
                    helperText="Please select"
                    sx={{marginRight:'10px'}}
                    >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                   </TextField>
                </Grid>
                <Grid item xs={6}>
                   <TextField
                    id="outlined-select-currency"
                    select
                    label="To"
                    defaultValue="EUR"
                    fullWidth
                    helperText="Please select"
                    sx={{marginRight:'10px'}}
                    >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                    </TextField>
                 </Grid>

                  <Grid item xs={6}>
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Number of Seat"
                    type='date'
                    maxRows={4}
                    fullWidth
                    />
                   </Grid>
                  <Grid item xs={6}>
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Number of Seat"
                    type='number'
                    maxRows={4}
                    fullWidth
                    />
                 </Grid>
                 <Grid item xs={12}>
                    <Button variant="contained" fullWidth disableElevation>
                       Reservation
                    </Button>
                 </Grid>
                </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Index
