import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

interface IProps {
  open: boolean;
  title: string;
  content: string;

  onClose(): void;

  onConfirm(): void;
}

const ConfirmDialog = ({
  open,
  onClose,
  onConfirm,
  content,
  title,
}: IProps) => {
  const handleConfirmClick = () => {
    onClose();
    onConfirm();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={onClose}>
          No
        </Button>
        <Button onClick={handleConfirmClick} autoFocus color={'warning'}>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
