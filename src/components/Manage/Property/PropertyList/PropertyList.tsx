import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import usePropertyList from '../../../../hooks/usePropertyList';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import ConfirmDialog from '../../../UI/ConfirmDialog/ConfirmDialog';

const PropertyList = () => {
  const {
    list,
    keys,
    openDialog,
    handleEdit,
    handleRemove,
    handleCloseDialog,
    handleConfirmRemove,
  } = usePropertyList();

  if (!list.length) {
    return <Typography>There is no property created at the moment!</Typography>;
  }

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            {keys.map((key, index) => (
              <TableCell key={index}>{key}</TableCell>
            ))}
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((item, index) => (
            <TableRow key={index}>
              {keys.map((key, index) => (
                <TableCell key={index}>{item[key]}</TableCell>
              ))}
              <TableCell>
                <IconButton color={'primary'} onClick={handleEdit(index)}>
                  <EditOutlinedIcon />
                </IconButton>
                <IconButton color={'error'} onClick={handleRemove(index)}>
                  <DeleteForeverOutlinedIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ConfirmDialog
        open={openDialog}
        title={'Are you sure?'}
        onClose={handleCloseDialog}
        onConfirm={handleConfirmRemove}
        content={'Do you want to remove a property from the list?'}
      />
    </>
  );
};

export default PropertyList;
