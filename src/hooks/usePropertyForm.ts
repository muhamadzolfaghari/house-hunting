import * as yup from 'yup';
import IProperty from '../interfaces/IProperty';
import { useFormik } from 'formik';
import { useAppDispatch } from '../app/hooks';
import { propertyCreated, propertyUpdated } from '../features/propertySlice';
import { useHistory, useParams } from 'react-router-dom';
import { ManageMethodType } from '../types/ManageMethodType';
import { useEffect } from 'react';
import getPropertyFromStorage from '../lib/utils/getPropertyFromStorage';

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

const usePropertyFrom = (method: ManageMethodType) => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const params = useParams<{ index: string }>();
  const { setValues, ...rest } = useFormik({
    validationSchema,
    initialValues,
    onSubmit: (values, actions) => {
      const property: IProperty = {
        address: values.address,
        description: values.description,
        name: values.name,
        price: +values.price,
      };

      if (method === 'add') {
        dispatch(propertyCreated(property));
      } else {
        dispatch(propertyUpdated({ index: +params.index, property }));
      }

      history.push('/manage/property');
    },
  });

  useEffect(() => {
    if (method === 'edit') {
      const propertyList = getPropertyFromStorage();

      if (propertyList) {
        const property = propertyList[+params.index];

        if (property) {
          const values = {
            price: String(property.price),
            address: property.address,
            description: property.description,
            name: property.name,
          };
          setValues(values);
          return;
        }
      }

      history.push('/manage/property');
    }
  }, [setValues, history, method, params.index]);

  return rest;
};

export default usePropertyFrom;
