import { makeStyles, useTheme } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Link from "src/Link";
import ButtonArrow from "src/ButtonArrow";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 140,
    width: 300,
  },
  loginButton: {
    // @ts-ignore
    ...theme.typography.learnButton,
    fontSize: '0.9rem',
    height: 45,
    width: 145,
  },
}));

export default function Buttons() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div> 
      <CardActions className={classes.media}>
        <Button
          href="/register"
          variant="contained"
          color="primary"
          disableElevation
        >
          Register
        </Button>
        <Button
          component={Link}
          href="/login"
          variant="outlined"
          className={classes.loginButton}
          onClick={() => setValue(2)}
        >
          <span style={{ marginRight: 10 }}>Login</span>
          <ButtonArrow
            width={15}
            height={15}
            // @ts-ignore
            fill={theme.palette.common.blue}
          />
        </Button>
      </CardActions>
    </div>
  );
}
