import * as Yup from 'yup';

export const contactValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .max(50, 'Name must be less than 50 characters'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  message: Yup.string()
    .required('Message is required')
    .max(5000, 'Message must be less than 5000 characters'),
});
