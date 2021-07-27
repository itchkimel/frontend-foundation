import React from "react";
import PropTypes from "prop-types";

Home.propTypes = {};

export default function Home(props) {
  return (
    <div>
      {props.token === null ? null : (
        <>
          <h1>
            {" "}
            Welcome to The Foundation. In memory of the late Jack Welshler
          </h1>
          <h3>
            We are a non-profit organization dedicated to providing financial
            help to the community.
          </h3>
          <h2>Please Login or Signup to continue and submit request</h2>
        </>
      )}
    </div>
  );
}
