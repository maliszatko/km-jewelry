import { React } from "react";
import { Formik } from "formik";
import { FormControl, TextField } from "@mui/material";
import { Form, Button } from "./StyledComponents";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {useMediaQuery} from "react-responsive";

const SignIn = (props) => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 900px)' })
    const textFieldStyle = {
        marginTop: "5%",
        textAlign: "left",
        marginBottom: "2%",
    }
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
          const auth = getAuth();
          signInWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
              // Signed in
              props.isSigned(true);
            })
            .catch((error) => {
              console.log(error.code);
            });
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
          <Form onSubmit={handleSubmit}>
            <FormControl size="medium" sx={{ marginTop: isTabletOrMobile ? "10%" : "0%", minWidth: isTabletOrMobile ? "60%" : "20%" }}>
              <TextField
                type="email"
                name="email"
                required
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                label="email"
                sx={textFieldStyle}
                InputProps={{style: {fontSize: '1.25rem' }}} // font size of input text
                InputLabelProps={{style: {fontSize: '1.0rem'}}}
              />
              <TextField
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                label="hasło"
                sx={textFieldStyle}
                InputProps={{style: {fontSize: '1.25rem' }}} // font size of input text
                InputLabelProps={{style: {fontSize: '1.0rem'}}}
              />
              <Button type="submit" disabled={isSubmitting}>
                Zaloguj
              </Button>
            </FormControl>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignIn;
