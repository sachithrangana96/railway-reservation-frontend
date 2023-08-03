import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { fetchReservation } from "./slices/reservetion";
import { fetchStation } from "../station/slices/stationSlice";
import DataTable from "../../components/dataTable/index";
import {Card,Skeleton,Box} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Unstable_Grid2";
import './index.css'


const Index = () => {
  const dispatch = useDispatch();  
  const reservations = useSelector((state) => state?.reservetion);
  const station = useSelector((state) => state?.station);

  useEffect(()=>{
      dispatch(fetchStation());
  },[])
 useEffect(()=>{
    console.log(reservations, "trains")
    console.log(station)
 },[reservations,station])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data, "form data");
    await dispatch(fetchReservation(data));
  };

  return (
    <Card  className="car-box">
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={1}>
            <Grid container item xs={12} sx={{ padding: "50px 10px" }}>
              <Grid item xs={3}>
                <select
                  id="from-outline"
                  select
                  placeholder="From"
                  name="from"
                  {...register("from", {
                    required: "From field is required.",
                  })}
                  fullWidth
                  className="text-box"
                >
                  {station?.stationAll?.map((options) => (
                    <option key={options.value} value={options.value}>
                      {options.label}
                    </option>
                  ))}
                </select>
                {errors.from && (
                  <p style={{ color: "red",fontWeight:'bold',padding:'5px' }}>{errors.from.message}</p>
                )}
              </Grid>
              <Grid item xs={3}>
                <select
                  id="to-outline"
                  select
                  label="To"
                  name="to"
                  {...register("to", {
                    required: "To field is required.",
                  })}
                  defaultValue="EUR"
                  fullWidth
                  sx={{ marginRight: "10px" }}
                  className="text-box"
                >
                  {station?.stationAll?.map((option) => (
                  <option key={option.value} value={option.value}>
                  {option.label}
                </option>
                  ))}
                </select>
                {errors.to && <p style={{ color: "white", color: "red" ,padding:'5px' }}>
                  {errors.to.message}
                </p>}
              </Grid>

              <Grid item xs={3}>
                <input
                  id="date"
                  name="date"
                  {...register("date", {
                    required: "Date is required.",
                  })}
                  type="date"
                  className="text-box"
                />
                {errors.date && (
                  <p style={{ color: "red",fontWeight:'bold',padding:'5px'}}>{errors.date.message}</p>
                )}
              </Grid>
              <Grid item xs={3}>
                <button
                  type="submit"
                  variant="contained"
                  fullWidth
                  disableElevation
                  className="button-box"
                >
                  Reservation
                </button>
              </Grid>
            </Grid>
          </Grid>
        </form>

        {reservations.loading &&(
            <Box sx={{ width: 300,margin:'0px 350px 0px 350px'}}>
            <Skeleton />
            <Skeleton  animation="wave" />
            <Skeleton />
          </Box>

          )}

        {
          reservations?.allReservation?.length > 0 && (
            <Grid container style={{height:'300px',overflow:'auto'}}>
              <DataTable record={reservations?.allReservation} />
            </Grid>
          )
        }
      </CardContent>
    </Card>
  );
};

export default Index;
