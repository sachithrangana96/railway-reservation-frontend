import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

const Index = () => {
  return (
    <Box
      component="footer"
      sx={{backgroundColor:'#34495e',marginTop:'50px'}}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{color:"white"}} gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" sx={{color:"white"}}>
              We are LankRail, Best railway resevation company in sri lanka
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{color:"white"}} gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{color:"white"}}>
              123 Main Street, Anytown, SL
            </Typography>
            <Typography variant="body2" sx={{color:"white"}}>
              Email: info@example.com
            </Typography>
            <Typography variant="body2" sx={{color:"white"}}>
              Phone: +1 234 567 8901
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{color:"white"}} gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" sx={{color:"white"}}>
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              sx={{color:"white",pl: 1, pr: 1}}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" sx={{color:"white"}}>
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" sx={{color:"white",padding:'10px'}}align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Index
