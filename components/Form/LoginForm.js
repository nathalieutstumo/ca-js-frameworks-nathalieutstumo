import { useFormik } from 'formik'
import { InputField } from './InputField'
import { FormLabel } from './FormLabel'
import { loginSchema } from './validation/loginSchema'

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
      message: '',
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      // Once form submited ex. {Email: 'John@example.com', Password: 'secret'}
      console.log(values)
    },
  })
  return (
    <>
      <form id='loginform' onSubmit={formik.handleSubmit}>
             
        <FormLabel text='Email: ' />
        <InputField
          id='email'
          name='email'
          onChange={formik.handleChange}
          style={{ backgroundColor: 'white' }}
        />
        <FormLabel style={{ color: 'red' }} text={formik.errors.email} />
        <br></br>
        <FormLabel text='First Name: ' />
        <InputField
          id='firstName'
          onChange={formik.handleChange}
          style={{ backgroundColor: 'white' }}
        />
        <FormLabel style={{ color: 'red' }} text={formik.errors.firstName} />
        
        <FormLabel text='Last Name: ' />
        <InputField
          id='lastName'
          onChange={formik.handleChange}
          style={{ backgroundColor: 'white' }}
        />
        <FormLabel style={{ color: 'red' }} text={formik.errors.lastName} />

        <FormLabel text='Message: ' />
        <InputField
          id='message'
          onChange={formik.handleChange}
          style={{ backgroundColor: 'white' }}
        />
        <FormLabel style={{ color: 'red' }} text={formik.errors.message} />
     
      </form>
      <button form='loginform' type='submit'>
        Login
      </button>
    </>
  )
}

export default LoginForm