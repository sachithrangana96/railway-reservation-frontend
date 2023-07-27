import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  Card,
  Grid,
  TextField,
  Button,
  CardContent,
  CardMedia,
  Typography,
  Textarea,
  MenuItem
} from "@mui/material";
import { useSelector,useDispatch } from 'react-redux';
import { signup } from "../slices/authSlice";

const gender = [
    {
      value: "Male",
      label: "Male",
    },
    {
      value: "Female",
      label: "Female",
    }
  ];
  

const Index = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const user = await dispatch(signup({...data,status:"active"}))
    if(user) navigate('/');
    

  };
  return (
    <Card container sx={{ height: "auto", padding: "50px 10px" }}>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={3}></Grid>

            <Grid container spacing={2} item xs={6} sx={{ padding: "50px 10px" }}>
              <Grid item xs={12}>
                <TextField
                  id="first-outline"
                  label="First Name"
                  name="first_name"
                  {...register("first_name", {
                    required: "This is required.",
                  })}
                  fullWidth
                  sx={{ marginRight: "10px" }}
                />
                {errors.first_name && (
                  <p sx={{ color: "red" }}>{errors.first_name.message}</p>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="last-name-outline"
                  label="Last Name"
                  name="last_name"
                  {...register("last_name", {
                    required: "This is required.",
                  })}
                  fullWidth
                  sx={{ marginRight: "10px" }}
                />
                {errors.last_name && (
                  <p sx={{ color: "red" }}>{errors.last_name.message}</p>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="gender-outline"
                  select
                  label="Gender"
                  name="email"
                  {...register("gender", {
                    required: "This is required.",
                  })}
                  fullWidth
                  sx={{ marginRight: "10px" }}
                >
                    {gender.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}

                </TextField>
                {errors.gender && (
                  <p sx={{ color: "red" }}>{errors.gender.message}</p>
                )}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="mobile-outline"
                  label="Mobile"
                  name="mobile"
                  type="number"
                  {...register("mobile", {
                    required: "This is required.",
                  })}
                  fullWidth
                  sx={{ marginRight: "10px" }}
                />
                {errors.mobile && (
                  <p sx={{ color: "red" }}>{errors.mobile.message}</p>
                )}
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  id="email-outline"
                  label="Email"
                  name="email"
                  {...register("email", {
                    required: "This is required.",
                  })}
                  fullWidth
                  sx={{ marginRight: "10px" }}
                />
                {errors.email && (
                  <p sx={{ color: "red" }}>{errors.email.message}</p>
                )}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="address-outline"
                  label="Address"
                  name="address"
                  {...register("address", {
                    required: "This is required.",
                  })}
                  multiline
                  rows={3}
                  fullWidth
                  sx={{ marginRight: "10px" }}
                />
                {errors.address && (
                  <p sx={{ color: "red" }}>{errors.address.message}</p>
                )}
               </Grid>
              <Grid item xs={12}>
                <TextField
                  id="password-outline"
                  label="Password"
                  type="password"
                  name="password"
                  {...register("password", {
                    required: "This is required.",
                  })}
                  fullWidth
                  sx={{ marginRight: "10px" }}
                />
                {errors.password && <p sx={{ color: "red" }}>{errors.password.message}</p>}
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  disableElevation
                >
                  SignUp
                </Button>
              </Grid>
            </Grid>
            <Grid item xs={3}></Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default Index;
