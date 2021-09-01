import ManageLayout from '../../../../components/UI/Layout/Manage/ManageLayout';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import PropertyForm from '../../../../components/Manage/Property/PropertyForm';

const AddProperty = () => (
  <ManageLayout>
    <Typography variant={'h1'}>Edit Property</Typography>
    <Divider />
    <PropertyForm method={'edit'} />
  </ManageLayout>
);

export default AddProperty;
