import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const Login = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().trim().required("username is required"),
      password: Yup.string()
        .trim()
        .min(8, "password min 8 character")
        .max(12, "password max 12 character")
        .required("password is required"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post("https://dummyjson.com/auth/login", {
          username: formik.values.username,
          password: formik.values.password,
        });
        const token = response.data.token;
        console.log(token);
        localStorage.setItem("token", token);
        console.log(
          "local token :----------- " + localStorage.getItem("token")
        );
        navigate("/");
      } catch (error) {
        console.error(error.message);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-field">
        <label>Username</label>
        <input
          id="username"
          name="username"
          type="username"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.username && formik.errors.username ? (
          <div>formik.errors.username</div>
        ) : null}
      </div>
      <div className="form-field">
        <label>Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password ? (
          <div>formik.errors.password</div>
        ) : null}
      </div>
      <button>Submit</button>
    </form>
  );
};

export default Login;
