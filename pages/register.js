import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import axios from "axios";
import { Paper } from "@material-ui/core";

import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

const useStyles = makeStyles((theme) => ({
  paperStyle: {
    padding: 20,
    height: "auto",
    width: 600,
    margin: "80px auto 20px auto",
  },
  avatarStyle: {
    backgroundColor: theme.palette.secondary.main,
  },
  btnstyle: {
    margin: "8px 0",
  },
  center: {
    alignItems: "center",
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [position, setPosition] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [nin, setNin] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email,
      firstName,
      lastName,
      userRole: position,
    };
    axios.post("api/register", data);

    // fetch("api/register", {
    //   method: "POST",
    //   body: data,
    // });
  };

  return (
    <div>
      <Navbar />
      <Grid>
        <Paper elevation={10} className={classes.paperStyle}>
          <Grid className={classes.center}>
              <Avatar className={classes.avatarStyle}>
                <LockOutlinedIcon />
              </Avatar>
            </Grid>
            <Typography component="h1" variant="h5">
              Register
            </Typography>

          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="nin"
                  label="NIN"
                  type="Number"
                  name="nin"
                  autoComplete="NIN"
                  value={nin}
                  onChange={(e) => setNin(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Position</FormLabel>
                  <RadioGroup
                    aria-label="position"
                    name="position"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                  >
                    <FormControlLabel
                      value="enrollment-officer"
                      control={<Radio />}
                      label="Enrollment Officer"
                    />
                    <FormControlLabel
                      value="supervisor"
                      control={<Radio />}
                      label="Supervisor"
                    />
                    <FormControlLabel
                      value="support-officer"
                      control={<Radio />}
                      label="Support Officer"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl className={classes.formControl}>
                  <FormLabel component="legend">Center</FormLabel>
                  <Select
                    labelId="demo-simple-select-placeholder-label-label"
                    id="demo-simple-select-placeholder-label"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    displayEmpty
                    className={classes.selectEmpty}
                    fullWidth
                  >
                    <MenuItem value="wuse-abuja">Wuse, Abuja</MenuItem>
                    <MenuItem value="abuja">Abuja</MenuItem>
                    <MenuItem value="lagos">Lagos</MenuItem>
                    <MenuItem value="abia">Abia</MenuItem>
                  </Select>
                  <FormHelperText>Select Your Center</FormHelperText>
                </FormControl>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.btnstyle}
              onClick={handleSubmit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </Paper>
        <Box mt={5}>
          <Footer />
        </Box>
      </Grid>
    </div>
  );
}
