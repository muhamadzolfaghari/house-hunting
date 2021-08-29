import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import useActiveRoute from "../../../../hooks/useActiveRoute";

const ManageDrawerList = () => {
  const activeRoute = useActiveRoute("/manage");

  return (
    <List>
      <ListItem button selected={activeRoute === "/property"}>
        <ListItemIcon>
          <HomeOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary={"Property"} />
      </ListItem>
    </List>
  );
};

export default ManageDrawerList;
