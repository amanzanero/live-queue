import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { CSSProperties } from "@material-ui/styles";

import { buttonStyles } from "./themes";

const useStyles = makeStyles((theme: Theme) => {
  const buttons: CSSProperties = buttonStyles(theme);
  return createStyles({
    root: {
      flexGrow: 1
    },
    title: {
      flexGrow: 1,
      marginLeft: theme.spacing(2)
    },
    button: { textTransform: "none", margin: theme.spacing(2), ...buttons }
  });
});

export default function ButtonAppBar({
  title,
  openLogin
}: {
  title: string;
  openLogin: Function;
}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            {title}
          </Typography>
          <Button
            size="large"
            className={classes.button}
            onClick={() => openLogin()}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
