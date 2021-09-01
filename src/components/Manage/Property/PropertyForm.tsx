import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import classes from './PropertyFrom.module.css';
import usePropertyForm from '../../../hooks/usePropertyForm';
import { ManageMethodType } from '../../../types/ManageMethodType';

interface IProps {
  method: ManageMethodType;
}

const PropertyForm = ({ method }: IProps) => {
  const form = usePropertyForm(method);

  return (
    <form onSubmit={form.handleSubmit}>
      <div className={classes.container}>
        <TextField
          required
          name={'name'}
          label={'Name'}
          value={form.values.name}
          onBlur={form.handleBlur}
          onChange={form.handleChange}
          error={form.touched.name && Boolean(form.errors.name)}
          helperText={form.touched.name && form.errors.name}
        />
        <TextField
          required
          name={'address'}
          label={'Address'}
          onBlur={form.handleBlur}
          value={form.values.address}
          onChange={form.handleChange}
          helperText={form.touched.address && form.errors.address}
          error={form.touched.address && Boolean(form.errors.address)}
        />
        <TextField
          required
          name={'price'}
          label={'Price'}
          onBlur={form.handleBlur}
          value={form.values.price}
          onChange={form.handleChange}
          InputProps={{ startAdornment: '$' }}
          helperText={form.touched.price && form.errors.price}
          error={form.touched.price && Boolean(form.errors.price)}
        />
        <TextField
          required
          name={'description'}
          label={'Description'}
          onBlur={form.handleBlur}
          onChange={form.handleChange}
          value={form.values.description}
          helperText={form.touched.description && form.errors.description}
          error={form.touched.description && Boolean(form.errors.description)}
        />
      </div>
      <Button
        type={'submit'}
        variant={'contained'}
        disabled={!form.isValid || !form.dirty}
      >
        {method === 'add' ? 'Add Property' : 'Update Property'}
      </Button>
    </form>
  );
};

export default PropertyForm;
