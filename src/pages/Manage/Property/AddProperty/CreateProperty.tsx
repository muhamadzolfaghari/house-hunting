import ManageLayout from '../../../../components/UI/Layout/Manage/ManageLayout';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import PropertyForm from "../../../../components/Manage/Property/PropertyForm";


const CreateProperty = () => (
  <ManageLayout>
    <Typography variant={'h1'}>Create New Property</Typography>
    <Divider />
    <PropertyForm method={'add'} />
  </ManageLayout>
);

export default CreateProperty;
