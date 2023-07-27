import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSingleRecord } from "../../pages/home/slices/reservetion";
import moment from "moment/moment";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";



const Index = (props) => {
  const { record } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const rowClick = (e) => {
    console.log("rowValue", e);
    dispatch(getSingleRecord(e));
    navigate(`reserve/${e._id}`);
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Train Name</TableCell>
            <TableCell align="right">Departs</TableCell>
            <TableCell align="right">Arrives</TableCell>
            <TableCell align="right">Start Time</TableCell>
            <TableCell align="right">Arrive Time </TableCell>
            <TableCell align="right">Number Of Seats </TableCell>
            <TableCell align="right">Available Seats </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {record?.map((row) => (
            <TableRow
              key={row.name}
              onClick={() => rowClick(row)}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.startStation?.name}</TableCell>
              <TableCell align="right">{row.endStation?.name}</TableCell>
              <TableCell align="right">{moment.unix(row.startTime).format('HH:SS')}</TableCell>
              <TableCell align="right">{moment.unix(row.endTime).format('HH:SS')}</TableCell>
              <TableCell align="right">{row.numberOfSeats}</TableCell>
              <TableCell align="right">
                {row.bookingStatus?.availableSeats}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Index;
