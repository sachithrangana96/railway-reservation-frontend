import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSingleRecord } from "../../pages/home/slices/reservetion";
import moment from "moment/moment";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { TableVirtuoso } from "react-virtuoso";

const columns = [
  {
    width: 100,
    label: "Train Name",
    dataKey: "name",
  },
  {
    width: 120,
    label: "Departs",
    dataKey: "departs",
  },
  {
    width: 120,
    label: "Arrives",
    dataKey: "arrives",
  },
  {
    width: 120,
    label: "Start Time",
    dataKey: "startTime",
  },
  {
    width: 120,
    label: "Arrive Time",
    dataKey: "endTime",
  },
  {
    width: 120,
    label: "Number Of Seats",
    dataKey: "numberOfSeats",
  },
  {
    width: 120,
    label: "Available Seats",
    dataKey: "availableSeats",
  },
];







const VirtuosoTableComponents = {
  Scroller: React.forwardRef((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table
      {...props}
      sx={{ borderCollapse: "separate", tableLayout: "fixed" }}
    />
  ),
  TableHead,
  TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
  TableBody: React.forwardRef((props, ref) => (
    <TableBody {...props} ref={ref} />
  )),
};

function fixedHeaderContent() {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          align={column.numeric || false ? "right" : "left"}
          style={{ width: column.width }}
          sx={{
            backgroundColor: "background.paper",
          }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

function RowContent(_index, row) {

  const rowClick = (e) => {
    window.location.href = `/reserve/${e?._id}/${e?.date}/${e?.price}`
  };

  return (
    <React.Fragment>
      {columns.map((column) => (
        
        <TableCell
          onClick={() => rowClick(row)}
          key={column.dataKey}
          align={column.numeric || false ? "right" : "left"}
        >
          {row[column.dataKey]}
        </TableCell>
      ))}
    </React.Fragment>
  );
}

const Index = (props) => {
  const { record } = props;
  const dispatch = useDispatch();
 

 
  return (
    <TableContainer component={Paper}>
      <TableVirtuoso
        data={record}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={RowContent}
      />
    </TableContainer>
  );
};

export default Index;
