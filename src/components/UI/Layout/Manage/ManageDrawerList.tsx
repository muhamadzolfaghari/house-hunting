import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import useActiveRoute from '../../../../hooks/useActiveRoute';
import ListItemButton from '@material-ui/core/ListItemButton';

const ManageDrawerList = () => {
  const activeRoute = useActiveRoute('/manage');

  return (
    <List>
      <ListItem disablePadding>
        <ListItemButton
          component={'a'}
          href="/manage/property"
          selected={activeRoute.includes('/property')}
        >
          <ListItemIcon>
            <HomeOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary={'Property'} />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default ManageDrawerList;
