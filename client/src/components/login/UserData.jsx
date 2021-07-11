import React from "react";
import axios from "axios";
import URL from "../../backendURL";
import { userLogin } from "../../actions/userLogin";
import { useDispatch } from "react-redux";

import {
  Typography,
  InputAdornment,
  TextField,
  Box,
  Button,
} from "@material-ui/core";

const UserData = (props) => {
  const dispatch = useDispatch();

  const [loginData, setLoginData] = React.useState({
    emailORPhone: "",
    pass: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const userResult = await axios.post(URL + "/login", loginData);
      dispatch(userLogin(userResult.data));
    } catch (error) {
      if (error.response && error.response.status === 403) {
        alert("Wrong Password Entered");
      } else if (error.response && error.response.status === 404) {
        alert("User Not Exist");
      } else {
        alert("Internal Server Error");
      }
    }
  };
  return (
    <>
      <form onSubmit={(e) => loginUser(e)}>
        <TextField
          fullWidth
          margin="normal"
          label="Enter Email/Mobile number"
          value={loginData.emailORPhone}
          onChange={(e) =>
            setLoginData({ ...loginData, emailORPhone: e.target.value })
          }
        />
        <TextField
          fullWidth
          margin="normal"
          type="password"
          label="Enter Password"
          value={loginData.pass}
          onChange={(e) => setLoginData({ ...loginData, pass: e.target.value })}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" component={Button}>
                <Typography
                  variant="subtitle2"
                  color="primary"
                  style={{ fontWeight: "bold" }}
                >
                  Forget?
                </Typography>
              </InputAdornment>
            ),
          }}
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
          type="submit"
          variant="contained"
          color="secondary"
          fullWidth
          style={{
            padding: "10px 20px",
            fontWeight: "bold",
            borderRadius: "2px",
          }}
        >
          Login
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
          }}
        >
          Request OTP
        </Button>
      </form>
      <Typography
        variant="subtitle2"
        onClick={() => props.setUserExist(false)}
        style={{
          fontWeight: "bold",
          cursor: "pointer",
          color: "#2874f0",
          marginTop: "auto",
        }}
      >
        New to Flipkart? Create an account
      </Typography>
    </>
  );
};

export default UserData;
