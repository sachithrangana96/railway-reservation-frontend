import React ,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import httpClient from '../../utils/httpClient'

const settings = [{name:'Profile', route:'profile'}, {name:'Booking History', route:'history'}, {name:'Logout', route:'logout'}];

const Index = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
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



  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
  return (
    <AppBar position="fixed" sx={{backgroundColor:"#34495e"}}>
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          LR
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
          </Menu>
        </Box>
        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
        <Typography
          variant="h5"
          noWrap
          component="a"
          href=""
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          LOGO
        </Typography>
        {profile?.full_name&&<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}></Box>}
       
        {!profile?.full_name&&(
 <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
 <Button><Link to={"/login"} style={{textDecoration:'none',color:'white'}}>Login</Link></Button>
 <Button> <Link to={"/register"} style={{textDecoration:'none',color:'white'}}>Register</Link></Button>

</Box>
        )}
       
          {profile?.full_name&&(
 <Box sx={{ flexGrow: 0 }}>
 <Tooltip title="Open settings">
   <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
     <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
   </IconButton>
 </Tooltip>
 <Menu
   sx={{ mt: '45px' }}
   id="menu-appbar"
   anchorEl={anchorElUser}
   anchorOrigin={{
     vertical: 'top',
     horizontal: 'right',
   }}
   keepMounted
   transformOrigin={{
     vertical: 'top',
     horizontal: 'right',
   }}
   open={Boolean(anchorElUser)}
   onClose={handleCloseUserMenu}
 >
   {settings.map((setting) => (
     <Link to={`/${setting.route}`} style={{textDecoration:'none', color:'black'}}>
      <MenuItem key={setting} onClick={handleCloseUserMenu}>
       <Typography textAlign="center">{setting.name}</Typography>
     </MenuItem>
     </Link>
    
   ))}
 </Menu>
</Box>
          )}
       
      </Toolbar>
    </Container>
  </AppBar>
  )
}

export default Index
