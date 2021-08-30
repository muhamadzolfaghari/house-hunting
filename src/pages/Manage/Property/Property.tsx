import Button from '@material-ui/core/Button';
import ManageLayout from '../../../components/UI/Layout/Manage/ManageLayout';
import classes from './Property.module.css';
import Box from '@material-ui/core/Box';
import PropertyList from '../../../components/Manage/Property/PropertyList/PropertyList';

const Property = () => (
  <ManageLayout>
    <Box display={'flex'}>
      <Button
        color={'primary'}
        variant={'contained'}
        className={classes.button}
        href={'/manage/property/create'}
      >
        Add New Property
      </Button>
    </Box>
    <PropertyList />
  </ManageLayout>
);

export default Property;
