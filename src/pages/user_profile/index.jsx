import React, { useEffect, useState } from "react";
import "./index.css";
import {
  Button,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import {
  AccountCircle,
  Phone,
  Email,
  Loyalty,
} from "@mui/icons-material";
import httpClient from '../../utils/httpClient'
import { Link } from "react-router-dom";

const UserProfile = () => {

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

  useEffect(()=>{console.log(profile)},[profile])


  return (
    <div style={{ height: "50vh", marginTop: "50px", padding: "50px 10px" }}>
      <div style={{ margin: "0 auto", borderRadius: "50%" }} align="center">
        <h2 align="center">PROFILE</h2>
      </div>

      <Grid container spacing={4}>
        <Grid item xs={6}>
          <div className="img-box"></div>
          <Link to="/update">
          <Button variant="contained" sx={{backgroundColor:'#34495e',color:'white'}} fullWidth>
            Update Profile
          </Button>
          </Link>
          
        </Grid>

        <Grid item xs={6}>
          <Grid container>
            <Grid item xs={6} style={{ padding: "20px" }}>
              <Stack spacing={2} direction="row" alignItems="center">
                <AccountCircle />
                <Typography noWrap>Address</Typography>
              </Stack>
            </Grid>
            <Grid item xs={6} style={{ padding: "20px" }}>
              <Typography noWrap>{profile?.address}</Typography>
            </Grid>

            <Grid item xs={6} style={{ padding: "20px" }}>
              <Stack spacing={2} direction="row" alignItems="center">
                <Phone />
                <Typography noWrap>Phone</Typography>
              </Stack>
            </Grid>
            <Grid item xs={6} style={{ padding: "20px" }}>
              <Typography noWrap>{profile?.mobile}</Typography>
            </Grid>

            <Grid item xs={6} style={{ padding: "20px" }}>
              <Stack spacing={2} direction="row" alignItems="center">
                <Email />
                <Typography noWrap>Email</Typography>
              </Stack>
            </Grid>
            <Grid item xs={6} style={{ padding: "20px" }}>
              <Typography noWrap>{profile?.email}</Typography>
            </Grid>

            <Grid item xs={6} style={{ padding: "20px" }}>
              <Stack spacing={2} direction="row" alignItems="center">
                <Loyalty />
                <Typography noWrap>Loyalty</Typography>
              </Stack>
            </Grid>
            <Grid item xs={6} style={{ padding: "20px" }}>
              <Typography noWrap>
                <span>👑</span>{profile?.loyality}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default UserProfile;
