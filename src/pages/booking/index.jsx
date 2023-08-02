import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import{Card,Grid,TextField,Button, CardContent,CardMedia,Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import reservetion from '../home/slices/reservetion';
import {createBooking} from './slices/bookingTrain';

const Index = () => {
    const { register, handleSubmit,formState: { errors }} = useForm();
    const [total,SetTotal] = useState(0);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const selecetdValue = useSelector((state)=>state.reservetion?.singleRecord);

    useEffect(()=>{
      if(selecetdValue==null){
        navigate('/')
      }
    },[selecetdValue])

    const onSubmit = async(data) => {
        let saveData = {
            date:selecetdValue.date,
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
    <CardContent>
    <form onSubmit={handleSubmit(onSubmit)}>
    <Grid container spacing={3}>
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
                    <Typography gutterBottom variant="h5" component="div">
                       {selecetdValue?.bookingStatus?.date}
                    </Typography>
                </CardContent>
             </CardContent>
            </Card> 
      </Grid>
    
      <Grid container spacing={1} item xs={6}>        
            <Grid item xs={12}>
               <TextField
                id="outer-price"
                label="Number of Seats"
                type='number'
                name="quantity"
                maxRows={2}
                fullWidth
                {...register("quantity", {
                  required: "This is required.",
                })}
                onChange={handleChangePrice}
                />
                {errors.quantity && <p  sx={{color:'red'}}>{errors.quantity.message}</p>}
             </Grid>

              <Grid item xs={12}> 
              <TextField
                id="outer-price"
                label="Total Price"
                name='price'
                value={total}
                maxRows={2}
                fullWidth
                readonly
                />
             </Grid>
             <Grid item xs={12}>
                <Button type="submit" variant="contained" fullWidth disableElevation>
                   Submit
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
