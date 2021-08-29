import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import classes from "./Header.module.css";

const Header = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="fixed" className={classes.root}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
          className={classes.header}
        >
          House Hunting
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
);

export default Header;
