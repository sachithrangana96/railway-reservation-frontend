import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Box} from '@mui/material'
import httpClient from '../../utils/httpClient'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, date, startTime,endTime,start,end, status) {
  
  return { name, date,startTime,endTime,start,end, status };
}

// const rows = [
//   createData('Ruhunu Kumari', '8/5/2023', '2.00 PM', '8.00 PM', 'Matara', 'Colombo', 'Paid'),
//   createData('Sagarika', '8/5/2023', '4.00 PM', '8.00 PM', 'Matara', 'Colombo', 'Paid'),
// ];

export default function CustomizedTables() {
  const [bookings, setBookings] = React.useState([])


  const fetchData = async()=>{
    const res = await httpClient.get('/bookings/user/userID')
    if(res.data){
      setBookings(res.data)
    }
  }

  React.useEffect(()=>{
    fetchData()
  },[])

  React.useEffect(()=>{console.log(bookings)},[bookings])
  return (
    <Box>
        <h3>Booking History</h3>
 <TableContainer component={Paper} style={{marginTop:'2%'}}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Train Name</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
            <StyledTableCell align="right">Time</StyledTableCell>
            <StyledTableCell align="right">Route</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bookings.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row?.train?.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row?.date}</StyledTableCell>
              <StyledTableCell align="right">{new Date(row?.train?.startTime).toLocaleTimeString()}-{new Date(row?.train?.endTime).toLocaleTimeString()}</StyledTableCell>
              <StyledTableCell align="right">{row.train.startStation?.name}-{row.train.endStation?.name}</StyledTableCell>
              <StyledTableCell align="right">{row.status}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
   
  );
}
