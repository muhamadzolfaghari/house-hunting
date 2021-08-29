import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import ManageDrawerList from "./ManageDrawerList";

const drawerWidth = 240;

const ManageDrawer = () => (
  <Drawer
    variant="permanent"
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      [`& .MuiDrawer-paper`]: {
        width: drawerWidth,
        boxSizing: "border-box",
      },
    }}
  >
    <Toolbar />
    <ManageDrawerList />
  </Drawer>
);

export default ManageDrawer;
