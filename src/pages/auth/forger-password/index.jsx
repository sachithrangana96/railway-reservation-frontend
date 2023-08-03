import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  Card,
  Grid,
  TextField,
  Button,
  CardContent,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import LockIcon from "@mui/icons-material/Lock";
import {  useDispatch } from "react-redux";
import { login } from "../slices/authSlice";

const Index = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    await dispatch(login({ requestData: data, navigate }));
  };
  return (
    <Card container sx={{ height: "auto", padding: "50px 10px" }}>
      <CardContent>
        <div style={{ margin: "0 auto", borderRadius: "50%" }} align="center">
          <h5>Forget Password</h5>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={3}></Grid>

            <Grid
              container
              spacing={2}
              item
              xs={6}
              sx={{ padding: "50px 10px" }}
            >

              <Grid item xs={12}>
                <TextField
                  id="password-outline"
                  label="Password"
                  type="password"
                  name="passwordConfirmation"
                  {...register('password', { required: 'Password is required' })}
                  fullWidth
                  sx={{ marginRight: "10px" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    ),
                  }}
                />
               {errors.password && <p>{errors.password.message}</p>}
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  id="password-outline"
                  label="Confirm Password"
                  type="password"
                  name="passwordConfirmation"
                  {...register('passwordConfirmation', {
                    required: 'Please confirm your password',
                    validate: (value) =>
                      value === watch('password', '') || 'Passwords do not match',
                  })}
                  fullWidth
                  sx={{ marginRight: "10px" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    ),
                  }}
                />
               {errors.passwordConfirmation && <p>{errors.passwordConfirmation.message}</p>}
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  sx={{color:"white",backgroundColor:'#34495e'}}
                  variant="contained"
                  fullWidth
                  disableElevation
                >
                  Submit
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
