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
import { useDispatch } from "react-redux";
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
    await dispatch(login({ requestData: data, navigate }));
  };
  return (
    <Card container sx={{ height: "auto", padding: "50px 10px" }}>
      <CardContent>
        <div style={{ margin: "0 auto", borderRadius: "50%" }} align="center">
         <h2>Verify Email</h2>
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
                <Button
                  type="submit"
                  sx={{color:"white",backgroundColor:'#34495e'}}
                  variant="contained"
                  fullWidth
                  disableElevation
                >
                  Verify
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
