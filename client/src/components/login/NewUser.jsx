import React, { useState, useEffect } from "react";
import axios from "axios";
import URL from "../../backendURL";
import { TextField, Button, Typography, Box } from "@material-ui/core";

const initialState = {
  name: "",
  email: "",
  mobileno: "",
  PWD: "",
  confirmPWD: "",
};

const NewUser = (props) => {
  const [User, setUser] = useState(initialState);

  const clearUser = () => setUser(initialState);

  useEffect(() => {
    clearUser();
  }, []);

  const createNewUser = async (e) => {
    e.preventDefault();
    if (User.PWD === User.confirmPWD) {
      const { confirmPWD, ...userData } = User;
      try {
        await axios.post(URL + "/newUser", userData);
        props.setUserExist(true);
        alert("New User Created");
      } catch (error) {
        if (error.response.status === 401) {
          alert("Mobile Number Already Exist");
        }
        console.log(error);
      }
    } else {
      alert("password not matched");
    }
    clearUser();
  };

  return (
    <>
      <form onSubmit={(e) => createNewUser(e)}>
        <TextField
          required
          fullWidth
          margin="normal"
          label="Enter Your Name"
          value={User.name}
          onChange={(e) => setUser({ ...User, name: e.target.value })}
        />
        <TextField
          required
          fullWidth
          margin="normal"
          type="email"
          label="Enter Your Email"
          value={User.email}
          onChange={(e) => setUser({ ...User, email: e.target.value })}
        />
        <TextField
          required
          fullWidth
          margin="normal"
          label="Enter Mobile number"
          type="number"
          value={User.mobileno}
          onChange={(e) => setUser({ ...User, mobileno: e.target.value })}
        />
        <TextField
          required
          fullWidth
          margin="normal"
          label="Enter Password"
          type="password"
          value={User.PWD}
          onChange={(e) => setUser({ ...User, PWD: e.target.value })}
        />
        <TextField
          required
          fullWidth
          margin="normal"
          label="Confirm Password"
          type="password"
          value={User.confirmPWD}
          onChange={(e) => setUser({ ...User, confirmPWD: e.target.value })}
        />
        <Typography
          variant="caption"
          component={Box}
          style={{
            marginTop: "1.5rem",
            marginBottom: "1.5rem",
            color: "#878787",
          }}
        >
          By continuing, you agree to Flipkart's{" "}
          <span style={{ color: "#2874f0" }}> Terms of Use </span>and
          <span style={{ color: "#2874f0" }}> Privacy Policy.</span>
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          style={{
            padding: "10px 20px",
            fontWeight: "bold",
            borderRadius: "2px",
          }}
          type="submit"
        >
          Continue
        </Button>
        <Typography
          variant="subtitle2"
          style={{
            color: "#878787",
            marginTop: "1rem",
            marginBottom: "1rem",
            textAlign: "center",
          }}
        >
          OR
        </Typography>
        <Button
          variant="contained"
          fullWidth
          style={{
            padding: "10px 20px",
            fontWeight: "bold",
            borderRadius: "2px",
            backgroundColor: "white",
            color: "#2874f0",
            marginTop: "auto",
          }}
          onClick={() => props.setUserExist(true)}
        >
          Existing User? Log in
        </Button>
      </form>
    </>
  );
};

export default NewUser;
