import { Box, TextField, Button, Typography } from "@mui/material";
import "./login.css";
import { useState } from "react";
const Login = () => {
  const [loginSignup, setloginSignup] = useState("login");
  const [signupvalues, setsignupvalues] = useState({
    name: "",
    username: "",
    password: "",
  });
  const imageURL =
    "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png";
  const toggleloginsignup = () => {
    loginSignup === "login"
      ? setloginSignup("signup")
      : setloginSignup("login");
  };
  const oninputchange = (e) => {
    setsignupvalues({ ...signupvalues, [e.target.name]: e.target.value });
  };
  return (
    <Box className="loginBox">
      <Box>
        <Box>
          <img src={imageURL} alt="Rehan's Blogs" className="loginImage" />
        </Box>
        {loginSignup === "login" ? (
          <Box className="loginFieldsContainor">
            <TextField variant="standard" label="Enter Username" />
            <TextField variant="standard" label="Enter Password" />
            <Button variant="contained" id="loginButton">
              Login
            </Button>
            <Typography className="loginOR">OR</Typography>
            <Button
              variant="text"
              id="loginCreateAcc"
              onClick={() => toggleloginsignup()}
            >
              Create an account
            </Button>
          </Box>
        ) : (
          <Box className="loginFieldsContainor">
            <TextField
              variant="standard"
              onChange={(e) => oninputchange(e)}
              name="name"
              label="Enter Name"
            />
            <TextField
              variant="standard"
              onChange={(e) => oninputchange(e)}
              name="username"
              label="Enter Username"
            />
            <TextField
              variant="standard"
              onChange={(e) => oninputchange(e)}
              name="password"
              label="Enter Password"
            />
            <Button variant="contained" id="loginButton">
              SignUp
            </Button>
            <Typography className="loginOR">OR</Typography>
            <Button
              variant="text"
              id="loginCreateAcc"
              onClick={() => toggleloginsignup()}
            >
              Already have an account
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Login;
