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
    dataKey: "Departs",
    numeric: true,
  },
  {
    width: 120,
    label: "Arrives",
    dataKey: "arrives",
    numeric: true,
  },
  {
    width: 120,
    label: "Start Time",
    dataKey: "start_time",
    numeric: true,
  },
  {
    width: 120,
    label: "Arrive Time",
    dataKey: "arrive_time",
    numeric: true,
  },
  {
    width: 120,
    label: "Number Of Seats",
    dataKey: "numberOfseat",
    numeric: true,
  },
  {
    width: 120,
    label: "Available Seats",
    dataKey: "available_seats",
    numeric: true,
  },
];

const sample = [
  ["Frozen yoghurt", 159, 6.0, 24, 4.0],
  ["Ice cream sandwich", 237, 9.0, 37, 4.3],
  ["Eclair", 262, 16.0, 24, 6.0],
  ["Cupcake", 305, 3.7, 67, 4.3],
  ["Gingerbread", 356, 16.0, 49, 3.9],
];

function createData(id, dessert, calories, fat, carbs, protein) {
  return { id, dessert, calories, fat, carbs, protein };
}

const rows = Array.from({ length: 200 }, (_, index) => {
  const randomSelection = sample[Math.floor(Math.random() * sample.length)];
  return createData(index, ...randomSelection);
});

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

function rowContent(_index, row) {
  return (
    <React.Fragment>
      {columns.map((column) => (
        <TableCell
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
  const navigate = useNavigate();

  const rowClick = (e) => {
    console.log("rowValue", e);
    dispatch(getSingleRecord(e));
    navigate(`reserve/${e._id}`);
  };
  return (
    <TableContainer component={Paper}>
      <TableVirtuoso
        data={rows}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
        onClick={rowClick}
      />
    </TableContainer>
  );
};

export default Index;
