import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  bottomLink: {
    marginBottom: "2rem",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Typography
      variant="body2"
      color="textSecondary"
      align="center"
      style={{
        marginBottom: "2rem",
      }}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://www.biosec.com.ng/" underline="none">
        Biosec Solutions
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
