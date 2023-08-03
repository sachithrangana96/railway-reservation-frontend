import React from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  TextField,
  Grid,
  Card,
  CardContent,
  InputAdornment,
} from "@mui/material";
import {
  AccountCircle,
  Phone,
  Email,
  AddHomeWork,
} from "@mui/icons-material";

const UpdateProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <div container style={{ height: "auto", padding: "30px 10px" }}>
        <div style={{ margin: "0 auto", borderRadius: "50%" }} align="center">
          <h2>Update Profile</h2>
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
                  id="name-outline"
                  label="Name"
                  name="name"
                  {...register("name", {
                    required: "Name is required.",
                  })}
                  fullWidth
                  error={errors?.first_name}
                  helperText={errors.first_name?.message}
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
                  Update
                </Button>
              </Grid>
            </Grid>
            <Grid item xs={3}></Grid>
          </Grid>
        </form>
    </div>
  );
};

export default UpdateProfile;
