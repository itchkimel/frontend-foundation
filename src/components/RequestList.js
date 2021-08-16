import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router";

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
  const history = useHistory();

  let handleDelete = (request) => {
    console.log(request.id)
    fetch(`http://localhost:3000/requests/${request.id}`, {
      method: "DELETE",
      headers: {
        "authorization": props.token
      }
    })
    .then(req => req.json())
    .then((req) => {
      props.handleDelete(req)
      // history.push("/requests")
    })
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
          <Button >Edit</Button>
          <Button onClick={() => handleDelete(request)}>Delete</Button>
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
            <TableCell align="center"><h3><strong>Name</strong></h3></TableCell>
            <TableCell align="center"><h3><strong>Telephone</strong></h3></TableCell>
            <TableCell align="center"><h3><strong>Reason</strong></h3></TableCell>
            <TableCell align="center"><h3><strong>Amount</strong></h3></TableCell>
            <TableCell align="center"><h3><strong>Date</strong></h3></TableCell>
            <TableCell align="center"><h3><strong>Edit/Delete</strong></h3></TableCell>
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
