import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@material-ui/core";
import { Today } from "@material-ui/icons";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function RequestList(props) {
  const classes = useStyles();

  let handleDelete = () => {
    let id = props.request.id;
  }
  let sortedDate = props.requests.sort(
    (a, b) =>
      new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
  );
  let decideWhichButtonToRender = (request) => {
    if (
      Math.abs(new Date() - new Date(request.updated_at)) <
      1000 * 60 * 60 * 24 * 3
    ) {
      return (
        <>
          <Button onClick={(request) => handleDelete(request.id)}>Edit</Button>
          <Button>Delete</Button>
        </>
      );
    } else {
      return <p></p>;
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Telephone</TableCell>
            <TableCell align="center">Reason</TableCell>
            <TableCell align="center">Amount</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Edit/Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedDate.map((request) => (
            <TableRow key={request.name}>
              <TableCell align="center">{request.name}</TableCell>
              <TableCell align="center">{request.telephone}</TableCell>
              <TableCell align="center">{request.reason_body}</TableCell>
              <TableCell align="center">{request.amount}</TableCell>
              <TableCell align="center">
                {new Date(request.updated_at).toString().slice(0, 16)}
              </TableCell>
              <TableCell align="center">
                {decideWhichButtonToRender(request)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
