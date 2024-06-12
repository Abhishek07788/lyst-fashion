import React, { useState, useContext, useEffect } from "react";
import {
  Box,
  Button,
  Grid,
  Stack,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useRouter } from "next/router";
import GoogleIcon from "@mui/icons-material/Google";
import { PATHS, QP } from "@/src/routes";
import Image from "next/image";
import { ASSETS } from "@/src/assets/assetsPath";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { AuthContext } from "@/src/contexts/AuthContext";

const getToken = ({ email, password }: { email: string; password: string }) => {
  return fetch(`https://reqres.in/api/login`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
};

const LoginSignup = () => {
  const { loginUser, isAuth } = useContext(AuthContext);
  const router = useRouter();
  const searchQuery = router.query[QP.loginPage] as "login" | "signup";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email.length === 0 || password.length === 0) {
      alert("Please Enter All Details.!!");
    } else {
      getToken({
        email: email,
        password: password,
      })
        .then((res) => res.json())
        .then((res) => {
          loginUser(email, res.token);
        });
    }
  };

  if (isAuth) {
    router.push(PATHS.home);
  }

  return (
    <Grid>
      <Grid
        container
        spacing={6}
        width={{ xs: "100%", lg: "80%" }}
        margin={"auto"}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={8} md={6}>
          <Typography variant="h4" fontWeight={500}>
            The only fashion website you'll need
          </Typography>
          <Box mt={2}>
            {searchQuery === "signup" && (
              <TextField
                fullWidth
                label="Name"
                required
                variant="outlined"
                placeholder="Enter your name"
                onChange={(e) => setEmail(e.target.value)}
                margin="normal"
              />
            )}
            <TextField
              fullWidth
              label="Email"
              required
              variant="outlined"
              placeholder="Enter your email address"
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
            />
          </Box>
          <PasswordInput
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword((e.target as HTMLInputElement).value)}
          />
          {searchQuery === "signup" && (
            <PasswordInput
              label="Confirm Password"
              placeholder="Enter your confirm password for sign up"
              value={password}
              onChange={(e) =>
                setPassword((e.target as HTMLInputElement).value)
              }
            />
          )}
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleLogin}
            sx={{ mt: 3 }}
          >
            {searchQuery === "signup" ? "Sign up" : "Login"}
          </Button>
          <Stack
            flexDirection={"row"}
            gap={1}
            justifyContent={"flex-end"}
            alignItems={"center"}
          >
            <Typography>
              {searchQuery === "signup"
                ? "Already have an account?"
                : "New User?"}
            </Typography>
            <Button
              variant="text"
              color="info"
              onClick={() =>
                router.push({
                  pathname: PATHS.login,
                  query: {
                    [QP.loginPage]:
                      searchQuery === "signup" ? "login" : "signup",
                  },
                })
              }
            >
              <b>
                <u>{searchQuery === "signup" ? "Login" : "Sign up"}</u>
              </b>
            </Button>
          </Stack>
          <Typography mt={2} textAlign="center">
            ---- OR ----
          </Typography>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<FacebookIcon color="info" />}
            sx={{ mt: 2 }}
            color="primary"
          >
            Continue with Facebook
          </Button>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<GoogleIcon color="warning" />}
            sx={{ mt: 2 }}
          >
            Continue with Google
          </Button>
          <Typography mt={4} color="textSecondary">
            By creating an account, you consent to Lyst’s{" "}
            <a href="#" style={{ textDecoration: "underline" }}>
              Terms & Conditions
            </a>
            . To learn more about how Lyst uses and protects your personal data,
            please read Lyst’s{" "}
            <a href="#" style={{ textDecoration: "underline" }}>
              Privacy Policy
            </a>
            .
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <Box display="flex" justifyContent="center" mt={2}>
            <Image
              src={ASSETS.loginGif}
              alt="Fashion Gif"
              width={600}
              height={500}
              layout="intrinsic"
            />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LoginSignup;

const PasswordInput = ({
  label,
  value,
  placeholder,
  onChange,
}: {
  label: string;
  value: string;
  placeholder: string;
  onChange: React.ChangeEventHandler;
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <TextField
      fullWidth
      required
      label={label}
      variant="outlined"
      type={showPassword ? "text" : "password"}
      placeholder={placeholder}
      onChange={onChange}
      margin="normal"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
