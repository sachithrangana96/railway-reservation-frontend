import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import{Card,Grid,TextField,Button, CardContent,CardMedia,Typography, Modal, Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import reservetion from '../home/slices/reservetion';
import {createBooking} from './slices/bookingTrain';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const Index = () => {
  const [map, setMap] = React.useState(null)
  const containerStyle = {
    width: '400px',
    height: '400px'
  };
  
  const center = {
    lat: -3.745,
    lng: -38.523
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDiFpRl2rb5tKDrP_TyCA_DLOUG9U5aWOY"
  })

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])


  

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
    const { register, handleSubmit,formState: { errors }} = useForm();
    const [total,SetTotal] = useState(0);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const selecetdValue = useSelector((state)=>state.reservetion?.singleRecord);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    useEffect(()=>{
      if(selecetdValue==null){
        //navigate('/')
      }
    },[selecetdValue])

    const onSubmit = async(data) => {
        let saveData = {
            date:data.date,
            train: selecetdValue._id,
            user:"649be0977968deaf21813ce9",
            quantity:data.quantity,
            price:total,
            status:"active"
        }
        console.log(saveData)
        debugger
        await dispatch(createBooking(saveData));
      };

     const  handleChangePrice = (e) =>{
        console.log(selecetdValue)
        SetTotal(selecetdValue?.price * e.target.value);
      }

  return (
    <Card container sx={{ height:'40vh',padding:'50px 10px' }}>
  <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box m={'20%'} ml={'35%'} >
        <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        
      >
        <Marker LatLngBounds={{ lat: -3.745,
    lng: -38.523}} position={{ lat: -3.745,
      lng: -38.523}}></Marker>
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>

        </Box>
        </Modal>
    <CardContent>
    <form onSubmit={handleSubmit(onSubmit)}>
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
                       Enter the details
                    </Typography>
                </CardContent>
             </CardContent>
            </Card> 
      </Grid>
    
      <Grid container spacing={2} item xs={6} sx={{padding:'50px 10px',}}>
      <Grid item xs={6}>
              <TextField
                id="date"
                label="Date"
                name='date'
                {...register("date", {
                  required: "This is required.",
                })}
                type='date'
                maxRows={4}
                fullWidth
                />
                {errors.date && <p  style={{color:'red'}}>{errors.date.message}</p>}
               </Grid>
           
            <Grid item xs={6}>
               <TextField
                id="outer-price"
                label="Number of Seats"
                type='number'
                name="quantity"
                maxRows={4}
                fullWidth
                {...register("quantity", {
                  required: "This is required.",
                })}
                onChange={handleChangePrice}
                sx={{marginRight:'10px'}}
                />
                {errors.quantity && <p  sx={{color:'red'}}>{errors.quantity.message}</p>}
             </Grid>

              <Grid item xs={12}> 
              <TextField
                id="outer-price"
                label="Total Price"
                name='price'
                value={100}
                maxRows={4}
                fullWidth
                readonly
                />
             </Grid>
             <Grid item xs={12}>
                <Button type="submit" variant="contained" fullWidth disableElevation>
                   Submit
                </Button>
                <Button variant="contained" onClick={handleOpen} style={{marginTop:'1%'}}fullWidth disableElevation>
                  Track Train
                </Button>
             </Grid>

            </Grid>
         
    </Grid>
    </form>
  </CardContent>
</Card>
  )
}

export default Index
