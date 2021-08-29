import ManageLayout from '../../../../components/UI/Layout/Manage/ManageLayout';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import AddPropertyForm
  from '../../../../components/Manage/Property/AddPropertyForm';

const CreateProperty = () => (
  <ManageLayout>
    <Typography variant={'h1'}>Create New Property</Typography>
    <Divider />
    <AddPropertyForm />
  </ManageLayout>
);

export default CreateProperty;
