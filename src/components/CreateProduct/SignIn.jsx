import { React, useState } from "react";
import { Formik } from "formik";
import { TextField, FormControl } from "@mui/material";
import { Form, Button } from "./StyledComponents";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function validateSignIn(value) {
  let error;
  if (value === "auth/wrong-password") {
    error = "Niewłaściwe hasło";
  } else {
    error = value;
  }
  return error;
}

const SignIn = (props) => {
  const [errorMessage, setErrorMessage] = useState("");
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = "Błędny adres mailowy";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          const auth = getAuth();
          signInWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
              // Signed in
              console.log(userCredential.user);
              props.isSigned(true);
              // ...
            })
            .catch((error) => {
              console.log(error.code);
              setErrorMessage(validateSignIn(error.code));
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
            <FormControl size="medium" sx={{ m: 1, minWidth: "30%" }}>
              <TextField
                type="email"
                name="email"
                required
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                label="email"
                sx={{ marginTop: "5%", textAlign: "left", marginBottom: "2%" }}
              />
              <h4 style={{ textSize: "0.1rem", color: "red" }}>
                {errors.email && touched.email && errors.email}
              </h4>
              <TextField
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                label="hasło"
                sx={{ marginTop: "5%", textAlign: "left" }}
              />
              {errors.password && touched.password && errors.password}
              <Button type="submit" disabled={isSubmitting}>
                Zaloguj
              </Button>
              <h4 style={{ textSize: "0.1rem", color: "red" }}>
                {errorMessage}
              </h4>
            </FormControl>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignIn;
