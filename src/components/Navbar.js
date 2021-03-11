import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Button from "@material-ui/core/Button";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    // flexGrow: 1,
    width: 50,
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <>
      <ElevationScroll>
        <div className={classes.root}>
          <AppBar position="fixed">
            <Toolbar>
              <Button className={classes.title} color="inherit" href="/">
                Homepage
              </Button>
            </Toolbar>
          </AppBar>
        </div>
      </ElevationScroll>
    </>
  );
}
