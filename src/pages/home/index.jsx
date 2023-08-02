import React, { useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { fetchReservation } from "./slices/reservetion";
import { fetchStation } from "../station/slices/stationSlice";
import DataTable from "../../components/dataTable/index";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { fetchMe } from '../profile/slices/profileSlice'

// import { LocalizationProvider, DatePicker } from '@mui/lab';

const currencies = [
  {
    value: "Station A",
    label: "Station A",
  },
  {
    value: "Station B",
    label: "Station B",
  },
  {
    value: "Station C",
    label: "Station C",
  },
  {
    value: "Station D",
    label: "Station D",
  },
];

const Index = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state?.reservetion);
  const station = useSelector((state) => state?.station);

  useEffect(()=>{
      dispatch(fetchStation());
  },[])

  useEffect(() => {
    const checkUser = async () => {
      try {
        const response = await dispatch(fetchMe());
        return !!response.data;
      } catch (error) {
        return false;
      }
    };

    checkUser();
   
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    await dispatch(fetchReservation(data));
  };

  return (
    <Card container sx={{ height: "auto", padding: "50px 10px" }}>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid container item xs={12} sx={{ padding: "50px 10px" }}>
              <Grid item xs={3}>
                <TextField
                  id="from-outline"
                  select
                  label="From"
                  name="from"
                  {...register("from", {
                    required: "This is required.",
                  })}
                  fullWidth
                  sx={{ marginRight: "10px" }}
                >
                  {station?.stationAll?.map((option) => (
                    <MenuItem key={option.name} value={option._id}>
                      {option.name}
                    </MenuItem>
                  ))}
                </TextField>
                {errors.from && (
                  <p sx={{ color: "red" }}>{errors.from.message}</p>
                )}
              </Grid>
              <Grid item xs={3}>
                <TextField
                  id="to-outline"
                  select
                  label="To"
                  name="to"
                  {...register("to", {
                    required: "This is required.",
                  })}
                  defaultValue="EUR"
                  fullWidth
                  sx={{ marginRight: "10px" }}
                >
                  {station?.stationAll?.map((option) => (
                    <MenuItem key={option.name} value={option._id}>
                      {option.name}
                    </MenuItem>
                  ))}
                </TextField>
                {errors.to && <p sx={{ color: "red" }}>{errors.to.message}</p>}
              </Grid>

              <Grid item xs={3}>
                <TextField
                  id="date"
                  name="date"
                  {...register("date", {
                    required: "This is required.",
                  })}
                  type="date"
                  maxRows={4}
                  fullWidth
                />
                {errors.date && (
                  <p style={{ color: "red" }}>{errors.date.message}</p>
                )}
              </Grid>
              <Grid item xs={3}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{padding:'15px'}}
                  disableElevation
                >
                  Reservation
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>

        {reservations?.loading && <h1>Loading ....................</h1>}

        {
          reservations?.allReservation?.length > 0 && (
            <Grid container>
              <DataTable record={reservations?.allReservation} />
            </Grid>
          )
        }
      </CardContent>
    </Card>
  );
};

export default Index;
