import React, { useState, useRef } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  Button,
  TextField,
  MenuItem,
  Select,
  InputLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
}));

export default function RequestForm(props) {
  console.log(props.token);
  const classes = useStyles();
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    address_number: 0,
    address_street: "",
    address_city: "",
    address_state: "",
    address_country: "",
    address_zip: "",
    marital_status: "",
    children: 0,
    work: "",
    reason_header: "",
    reason_body: "",
    amount: 0,
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/requests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${props.token}`
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          alert(data.error);
        } else {
          history.push("/");
        }
      });
  }

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        name="name"
        label="Full Name"
        variant="filled"
        required
        value={formData.name}
        onChange={handleChange}
      />
      <TextField
        name="email"
        label="Email"
        variant="filled"
        type="email"
        required
        value={formData.email}
        onChange={handleChange}
      />
      <TextField
        name="telephone"
        label="Telephone"
        variant="filled"
        type="telephone"
        required
        value={formData.telephone}
        onChange={handleChange}
      />
      <TextField
        name="address_number"
        label="Address Number"
        variant="filled"
        type="number"
        InputProps={{ inputProps: { min: 0 } }}
        required
        value={formData.address_number}
        onChange={handleChange}
      />
      <TextField
        name="address_street"
        label="Street"
        variant="filled"
        required
        value={formData.address_street}
        onChange={handleChange}
      />
      <TextField
        name="address_city"
        label="City"
        variant="filled"
        required
        value={formData.address_city}
        onChange={handleChange}
      />
      <TextField
        name="address_state"
        label="State"
        variant="filled"
        required
        value={formData.address_state}
        onChange={handleChange}
      />
      <TextField
        name="address_country"
        label="Country"
        variant="filled"
        required
        value={formData.address_country}
        onChange={handleChange}
      />
      <TextField
        name="address_zip"
        label="Zip"
        variant="filled"
        required
        value={formData.address_zip}
        onChange={handleChange}
      />
      {/* <FormControl className={classes.formControl}> */}
      <InputLabel id="marital_status">Marital Status</InputLabel>
      <Select
        name="marital_status"
        label="Marital Status"
        required
        value={formData.marital_status}
        onChange={handleChange}
      >
        <MenuItem value={"married"}>Married</MenuItem>
        <MenuItem value={"divorced"}>Divorced</MenuItem>
        <MenuItem value={"seperated"}>Seperated</MenuItem>
        <MenuItem value={"single"}>Single</MenuItem>
      </Select>
      {/* </FormControl> */}

      <TextField
        name="children"
        label="Children"
        variant="filled"
        type="number"
        InputProps={{ inputProps: { min: 0, max: 50 } }}
        required
        value={formData.children}
        onChange={handleChange}
      />
      <TextField
        name="work"
        label="Work"
        variant="filled"
        required
        value={formData.work}
        onChange={handleChange}
      />
            <TextField
        name="reason_header"
        label="Request"
        placeholder="Please give a header for the request"
        variant="filled"
        required
        value={formData.reason_header}
        onChange={handleChange}
      />
      <TextField
        name="reason_body"
        // label="Reason Body"
        multiline
        placeholder="Please write a full but concise reason for the requested grant"
        variant="filled"
        required
        value={formData.reason_body}
        onChange={handleChange}
      />
      <TextField
        name="amount"
        label="Requested Amount"
        variant="filled"
        type="number"
        required
        value={formData.amount}
        onChange={handleChange}
      />
      <div>
        {/* <Button variant="contained" component={Link} to="/">
          Review
        </Button> */}
        <Button type="submit" variant="contained" color="primary">
          Submit Request
        </Button>
      </div>
    </form>
  );
}
