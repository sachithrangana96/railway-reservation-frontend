import React from 'react';
import { Button, Grid, Paper } from '@mui/material';
import { AccountCircle, Phone, Email, Loyalty, Update, ContactSupport } from '@mui/icons-material';

const styles = {
  root: {
    padding: '20px',
    maxWidth: '600px', // Adjust this value as per your requirement
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    borderRadius: '12px',
    background: '#86C5D8',
    color: '#fff',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  heading: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '16px',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
  },
  profileItem: {
    marginBottom: '12px',
    display: 'flex',
    alignItems: 'center',
  },
  label: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginRight: '8px',
    textShadow: '1px 1px 1px rgba(0, 0, 0, 0.1)',
  },
  value: {
    fontSize: '18px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  icon: {
    fontSize: '24px',
    marginRight: '4px',
  },
  loyaltyPoints: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '8px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
  },
  button: {
    marginTop: '16px',
    background: '#fff',
    color: '#86C5D8',
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
};

const UserProfile = () => {
  return (
    <Paper style={styles.root}>
      <div style={styles.heading}>Welcome, John Doe!</div>
      <Grid container spacing={1} alignItems="center" style={styles.profileItem}>
        <Grid item>
          <AccountCircle style={styles.iconButton} />
        </Grid>
        <Grid item>
          <div style={styles.label}>Address:</div>
        </Grid>
        <Grid item>
          <div style={styles.value}>123 Main St, City, Country</div>
        </Grid>
      </Grid>
      <Grid container spacing={1} alignItems="center" style={styles.profileItem}>
        <Grid item>
          <Phone style={styles.iconButton} />
        </Grid>
        <Grid item>
          <div style={styles.label}>Phone Number:</div>
        </Grid>
        <Grid item>
          <div style={styles.value}>+1 (123) 456-7890</div>
        </Grid>
      </Grid>
      <Grid container spacing={1} alignItems="center" style={styles.profileItem}>
        <Grid item>
          <Email style={styles.iconButton} />
        </Grid>
        <Grid item>
          <div style={styles.label}>Email:</div>
        </Grid>
        <Grid item>
          <div style={styles.value}>john.doe@example.com</div>
        </Grid>
      </Grid>
      <Grid container spacing={1} alignItems="center" style={styles.profileItem}>
        <Grid item>
          <Loyalty style={styles.iconButton} />
        </Grid>
        <Grid item>
          <div style={styles.label}>Loyalty Points:</div>
        </Grid>
        <Grid item>
          <div style={styles.loyaltyPoints}>
            <span style={styles.icon}>👑</span>500
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={1} alignItems="center" style={styles.profileItem}>
        <Grid item>
          <Update style={styles.iconButton} />
        </Grid>
        <Grid item>
          <Button style={styles.button} variant="contained">
            Update Profile
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={1} alignItems="center" style={styles.profileItem}>
        <Grid item>
          <ContactSupport style={styles.iconButton} />
        </Grid>
        <Grid item>
          <div style={styles.value}>Contact Support</div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default UserProfile;
