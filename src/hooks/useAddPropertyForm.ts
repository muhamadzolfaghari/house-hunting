import * as yup from 'yup';
import IProperty from '../interfaces/IProperty';
import { useFormik } from 'formik';

const validationSchema = yup.object({
  name: yup.string().required('The name is required'),
  price: yup.string().required('The price is required'),
  address: yup.string().required('The address is required'),
  description: yup.string().required('The Description is required'),
});

const initialValues: Record<keyof IProperty, string> = {
  price: '',
  name: '',
  address: '',
  description: '',
};

const useAddPropertyFrom = () => {
  return useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, actions) => {
      const property: IProperty = {
        address: values.address,
        description: values.description,
        name: values.name,
        price: +values.price,
      };

      console.log(property);
    },
  });
};

export default useAddPropertyFrom;
