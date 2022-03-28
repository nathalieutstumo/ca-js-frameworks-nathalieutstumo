import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  email: Yup.string().email().required('Required'),
  firstName: Yup.string().required('Required').min(3, 'Too Short!'),
  lastName: Yup.string().required('Required').min(4, 'Too Short!'),
  message: Yup.string().required('Required').min(10, 'Too Short!'),
})


