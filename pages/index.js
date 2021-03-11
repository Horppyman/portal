import React, { useEffect, useState } from "react";
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Toolbar, Collapse } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Buttons from "@components/RegLogBtn";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url("assets/background3.jpg")`,
    backgroundSize: "cover",
  },
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  appBar: {
    background: "none",
  },
  appBarWrapper: {
    width: "100%",
    margin: "0 auto",
    height: "110px",
  },
  icon: {
    color: "#fff",
  },
  title: {
    color: "#0877cc",
  },
  titleColor: {
    color: "#f21505",
  },
  container: {
    textAlign: "center",
  },
  mainText: {
    color: "#FFF",
    fontSize: "2.5rem",
  },
  moreButton: {
    color: "#85ADED",
    fontSize: "2rem",
  },
  btns: {
    height: "50px",
  }
}));

export default function Home() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <div className={classes.main}>
        <AppBar className={classes.appBar} elevation={0}>
          <Toolbar className={classes.appBarWrapper}>
            <img
              style={{ maxWidth: 200, maxHeight: 200 }}
              src="/assets/biosec-logo1.png"
            />
          </Toolbar>
        </AppBar>

        <Collapse
          in={checked}
          {...(checked ? { timeout: 2500 } : {})}
          collapsedHeight={50}
        >
          <div className={classes.container}>
            <h1 className={classes.mainText}>
              <span className={classes.titleColor}>Biosec</span>{" "}
              <span className={classes.title}>Enrollment</span> <br />
              <span className={classes.title}>Report Portal</span>
            </h1>
            <IconButton className={classes.btns}>
            <Buttons />
            </IconButton>
          </div>
        </Collapse>
      </div>
    </div>
  );
}
