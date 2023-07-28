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
} from "@mui/material";
import { useSelector,useDispatch } from 'react-redux';
import { login } from "../slices/authSlice";

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
    await dispatch(login({requestData:data, navigate}))

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
                  SignIn
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
