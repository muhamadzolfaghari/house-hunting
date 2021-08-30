import TextField from '@material-ui/core/TextField';
import useAddPropertyForm from '../../../hooks/useAddPropertyForm';
import Button from '@material-ui/core/Button';
import classes from './AddPropertyFrom.module.css';

const AddPropertyForm = () => {
  const form = useAddPropertyForm();

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
          value={form.values.address}
          onBlur={form.handleBlur}
          onChange={form.handleChange}
          helperText={form.touched.address && form.errors.address}
          error={form.touched.address && Boolean(form.errors.address)}
        />
        <TextField
          required
          name={'price'}
          label={'Price'}
          InputProps={{
            startAdornment: '$',
          }}
          onBlur={form.handleBlur}
          value={form.values.price}
          onChange={form.handleChange}
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
        Add Property
      </Button>
    </form>
  );
};

export default AddPropertyForm;
