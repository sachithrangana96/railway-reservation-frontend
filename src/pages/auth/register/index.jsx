import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  TextField,
  Button,
  MenuItem,
  InputAdornment,
} from "@mui/material";
import {
  AccountCircle,
  Phone,
  Email,
  AddHomeWork,
  Lock,
} from "@mui/icons-material";
import {  useDispatch } from "react-redux";
import { signup } from "../slices/authSlice";
import registerImg from "../../../assets/img/register.jpg";
import httpClient from '../../../utils/httpClient'

const gender = [
  {
    value: "Male",
    label: "Male",
  },
  {
    value: "Female",
    label: "Female",
  },
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
    data.status = 'active'
    //await dispatch(signup({ ...data, status: "active", navigate }));
    await httpClient.post('/auth/user', data)
    window.location.href = '/'
    console.log(data)


  };
  return (
    <div container style={{ height: "auto", padding: "50px 10px" }}>
      <div style={{ margin: "0 auto", borderRadius: "50%" }} align="center">
        <img
          src={registerImg}
          width={200}
          height={150}
          alt=""
          style={{ borderRadius: "50%" }}
        />
        <h2 align="center">SIGNUP</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={3}></Grid>

          <Grid container spacing={2} item xs={6} sx={{ padding: "50px 10px" }}>
            <Grid item xs={12}>
              <TextField
                id="name-outline"
                label="Name"
                name="full_name"
                {...register("full_name", {
                  required: "Name is required.",
                })}
                fullWidth
                error={errors?.full_name}
                helperText={errors.full_name?.message}
                sx={{ marginRight: "10px" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="gender-outline"
                select
                label="Gender"
                name="email"
                {...register("gender", {
                  required: "Gender is required.",
                })}
                fullWidth
                sx={{ marginRight: "10px" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              >
                {gender.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="mobile-outline"
                label="Mobile"
                name="mobile"
                type="number"
                {...register("mobile", {
                  required: "Mobile is required.",
                  minLength: 10,
                  maxLength: 10,
                })}
                fullWidth
                error={errors?.mobile}
                sx={{ marginRight: "10px" }}
                placeholder="Ex : 0775463225"
                helperText={errors.mobile?.message}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Phone />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="email-outline"
                label="Email"
                name="email"
                {...register("email", {
                  required: "Email is required.",
                  pattern:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
                fullWidth
                error={errors?.email}
                sx={{ marginRight: "10px" }}
                helperText={errors.email?.message}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="password-outline"
                label="Password"
                type="password"
                name="password"
                {...register("password", {
                  required: "required valid password",
                  pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
                })}
                fullWidth
                error={errors?.password}
                sx={{ marginRight: "10px" }}
                helperText={errors.password?.message}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock />
                    </InputAdornment>
                  ),
                }}
              />
              <span style={{ fontSize: "10px" }}>
                ( shoud contain upper,lower and special characters and length 6
                to 15.){" "}
              </span>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="address-outline"
                label="Address"
                name="address"
                {...register("address", {
                  required: "Address is required.",
                })}
                multiline
                rows={3}
                fullWidth
                error={errors?.address}
                sx={{ marginRight: "10px" }}
                helperText={errors.address?.message}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AddHomeWork />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                sx={{color:"white",backgroundColor:'#34495e'}}
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
    </div>
  );
};

export default Index;
