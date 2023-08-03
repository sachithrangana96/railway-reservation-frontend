import React, { useEffect, useState } from "react";
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
import httpClient from '../../utils/httpClient'

const UpdateProfile = () => {
  const [profile, setProfile] = useState({})


  const fetchData = async()=>{
    const res = await httpClient.get('/users/me')
    if(res.data){
      setProfile(res.data)
    }
  }

  useEffect(()=>{
    fetchData()
  },[])

 
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({});

  useEffect(()=> {
    console.log(profile)
    setValue('full_name', profile?.full_name)
    setValue('mobile', profile?.mobile)
    setValue('address', profile?.address)
  },[profile])

  const onSubmit = async (data) => {
    await httpClient.post('/users/update', data)
    window.location.href = '/profile'
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
                  id="mobile-outline"
                  label="Mobile"
                  name="mobile"
                  type="number"
                  {...register("mobile", {
                    required: "Mobile is required.",
                    minLength: 8,
                    maxLength: 12,
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
