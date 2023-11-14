import { Formik, Form } from "formik";
import { USER_VALIDATION_SCHEMA } from "../../../utils/validationSchemas"
import Input from "./../Input";
import SquadLogo from "../../SquadLogo";
import styles from "./../styles.module.scss"

function SignUpForm() {
  const initialValues = {
    firstrName: "",
    lastName: "",
    password: "",
    confirmPassord: "",
    phoneNumber: "",
    email: "",
    confirmEmail: "",
    birthday: "",
  };

  const handleSubmit = (values, formikBag) => {
    console.log("values :>> ", values);
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
            <button type="button" className={styles.button}>
              login
            </button>
          </div>
          <div className={styles.header}>
            <h2>CREATE AN ACCOUNT</h2>
            <p>Nous gardons toujours votre nom et votre e-mail prives</p>
          </div>

          <div className={styles.main}>
            <Input 
              name="firstName"
              label="first name"
              type ="text"
              placeholder="Name"
              classes={classes}
            />
            <Input
              name="email"
              label="email:"
              type="text"
              placeholder="example@mail.som"
              classes={classes}
            />
                        <Input
              name="password"
              label="password"
              type="password"
              placeholder="should contain at least __ and"
              classes={classes}
            />

          </div>
          <div className={styles.confirm}>
          <Input 
              name="lastName"
              label="last name"
              type ="text"
              placeholder="last name"
              classes={classes}
            />
            <Input
              name="confirmEmail"
              label="confirmEmail:"
              type="text"
              placeholder="example@mail.som"
              classes={classes}
            />
            <Input
              name="confirmPassword"
              label="confirm password:"
              type="text"
              placeholder=" and other password things"
              classes={classes}
            />
          </div>

          <div className={styles.footer}>
            <button className={styles.button} type="submit">
              Send
            </button>
            <button className={styles.button} type="reset">
              Reset
            </button>
          </div>
        </Form>
      </Formik>
    );
}

export default SignUpForm;



