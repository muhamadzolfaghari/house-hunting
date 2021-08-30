import * as yup from 'yup';
import IProperty from '../interfaces/IProperty';
import { useFormik } from 'formik';
import { useAppDispatch } from '../app/hooks';
import { propertyCreated } from '../features/propertySlice';
import { useHistory } from "react-router-dom";

const validationSchema = yup.object({
  name: yup.string().required('The name is required'),
  price: yup.number().required('The price is required'),
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
  const history = useHistory();
  const dispatch = useAppDispatch();

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
      dispatch(propertyCreated(property));
      history.push('/manage/property')
    },
  });
};

export default useAddPropertyFrom;
