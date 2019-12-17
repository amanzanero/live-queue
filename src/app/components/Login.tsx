import * as React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

/**
 *
 * Login needs to be completed
 */

const Login = ({
  onLogin,
  isOpen,
  handleClose
}: {
  onLogin: Function;
  isOpen: boolean;
  handleClose: Function;
}) => {
  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={() => handleClose()}
        aria-labelledby="form-dialog-title"
        maxWidth="xs"
        fullWidth={true}
      >
        <DialogTitle id="form-dialog-title">Login</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose()} color="primary">
            Cancel
          </Button>
          <Button onClick={() => onLogin()} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Login;
