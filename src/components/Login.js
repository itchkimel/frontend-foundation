import React, { useState } from "react";
// import { useHistory } from "react-router";
import { Link } from "react-router-dom";
// import { useForm } from "react-hook-form";
import {
  Button,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
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

export default function Login(props) {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    user: "User",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (formData.user === "User") {
      fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((r) => r.json())
        .then(props.handleResponse);
    } else {
      alert("User is Admin");
    }
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
        name="password"
        label="Password"
        variant="filled"
        type="password"
        required
        value={formData.password}
        onChange={handleChange}
      />
      <FormControl component="fieldset">
        <RadioGroup
          name="user"
          value={formData.user}
          onChange={handleChange}
          row
        >
          <FormControlLabel value="User" control={<Radio />} label="User" />
          <FormControlLabel
            value="Admin"
            control={<Radio />}
            label="Admin (under construction)"
          />
        </RadioGroup>
      </FormControl>
      <div>
        <Button variant="contained" component={Link} to="/">
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </div>
    </form>
  );
}
