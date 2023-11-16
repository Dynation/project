import { Formik, Form } from 'formik';
import { USER_VALIDATION_SCHEMA } from '../../../utils/validationSchemas';
import { Link } from 'react-router-dom';
import Input from './../Input';
import SquadLogo from '../../SquadLogo';
import styles from './../styles.module.scss';

function LoginForm () {
  const initialValues = {
    firstrName: '',
    lastName: '',
    password: '',
    confirmPassord: '',
    phoneNumber: '',
    email: '',
    confirmEmail: '',
    birthday: '',
  };

  const handleSubmit = (values, formikBag) => {
    console.log('values :>> ', values);
    formikBag.resetForm();
  };

  const classes = {
    error: styles.error,
    input: styles.input,
    valid: styles.valid,
    invalid: styles.invalid,
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={USER_VALIDATION_SCHEMA}
    >
      <Form className={styles.formbody}>
        <div className={styles.logo}>
          <SquadLogo />
        </div>
        <div className={styles.login}>
    <Link to='/signup' className={styles.button}>
            signup
          </Link>
        </div>
        <div className={styles.header}>
          <h2>LOGIN</h2>
          <p>ITS LOGIN FORM</p>
        </div>

        <div className={styles.mainlogin}>

          <Input
            name='email'
            label='email:'
            type='text'
            placeholder='example@mail.som'
            classes={classes}
          />
          <Input
            name='password'
            label='password'
            type='password'
            placeholder='should contain at least __ and'
            classes={classes}
          />
        </div>


        <div className={styles.footer}>
          <button className={styles.button} type='submit'>
            Send
          </button>
          <button className={styles.button} type='reset'>
            Reset
          </button>
        </div>
      </Form>
    </Formik>
  );
}

export default LoginForm;
