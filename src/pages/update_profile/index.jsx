import React from 'react';
import { Button, TextField, Grid, Paper } from '@mui/material';
import { AccountCircle, Phone, Email, Loyalty } from '@mui/icons-material';

const styles = {
  root: {
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    borderRadius: '12px',
    background: '#86C5D8', // Background color
    color: '#fff', // Font color
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  heading: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '16px',
  },
  textField: {
    width: '100%',
    marginBottom: '12px',
  },
  button: {
    marginTop: '16px',
    background: '#fff', // Button background color
    color: '#86C5D8', // Button font color
    textTransform: 'uppercase',
    fontWeight: 'bold',
    borderRadius: '8px',
    padding: '8px 16px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  iconButton: {
    fontSize: '32px',
    marginRight: '12px',
  },
  loyaltyPoints: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '8px',
  },
};

const UpdateProfile = () => {
  return (
    <Paper style={styles.root}>
      <div style={styles.heading}>Update Profile</div>
      <Grid container spacing={1} alignItems="center">
        <Grid item>
          <AccountCircle style={styles.iconButton} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Name"
            variant="outlined"
            style={styles.textField}
            defaultValue="John Doe"
          />
        </Grid>
      </Grid>
      <Grid container spacing={1} alignItems="center">
        <Grid item>
          <Phone style={styles.iconButton} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Phone Number"
            variant="outlined"
            style={styles.textField}
            defaultValue="+1 (123) 456-7890"
          />
        </Grid>
      </Grid>
      <Grid container spacing={1} alignItems="center">
        <Grid item>
          <Email style={styles.iconButton} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Email"
            variant="outlined"
            style={styles.textField}
            defaultValue="john.doe@example.com"
          />
        </Grid>
      </Grid>
      <Grid container spacing={1} alignItems="center">
        <Grid item>
          <Loyalty style={styles.iconButton} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Loyalty Points"
            variant="outlined"
            style={styles.textField}
            defaultValue="500"
          />
        </Grid>
      </Grid>
      <Button style={styles.button} variant="contained">
        Save Changes
      </Button>
    </Paper>
  );
};

export default UpdateProfile;
