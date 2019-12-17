import { Theme } from "@material-ui/core/styles";
import { CSSProperties } from "@material-ui/styles";

export const buttonStyles = (theme: Theme): CSSProperties => ({
  backgroundColor: theme.palette.primary.light,
  "&:hover": {
    background: theme.palette.secondary.main
  },
  "&:focus": {
    background: theme.palette.secondary.main
  },
  fontSize: 18,
  color: "white"
});
