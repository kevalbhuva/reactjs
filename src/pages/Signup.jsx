import { useFormik } from "formik";
import * as Yup from "yup";
import "../SignUp.css";
import Navigation from "../component/Navigation";
import React, { useState, useEffect } from "react";

const SignUp = () => {
  const [addresses, setAddress] = useState([]);
  const address = {
    street: "",
    city: "",
    state: "",
  };
  useEffect(() => {
    addAddress();
  }, []);
  const addAddress = () => {
    const newAddresses = addresses;
    newAddresses.push(address);
    setAddress([...newAddresses]);
  };
  const removeAddress = (index) => {
    if (index != 0) {
      const newAddresses = addresses;
      newAddresses.splice(index, 1);
      setAddress([...newAddresses]);
    }
  };
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string().trim().required("First Name is required"),
      lastname: Yup.string().trim().required("Lastname is required"),
      email: Yup.string()
        .trim()
        .email("Invalid email address")
        .required("email is required"),
      password: Yup.string()
        .trim()
        .min(8, "Password min 8 characters")
        .max(12, "Password max 12 characters")
        .required("password is required"),
    }),
    // validate: (values) => {
    //   const errors = {};

    //   if (!values.firstname) {
    //     errors.firstname = "Required";
    //   }
    //   if (!values.lastname) {
    //     errors.lastname = "Required";
    //   }
    //   if (!values.email) {
    //     errors.email = "Required";
    //   }
    //   if (!values.password) {
    //     errors.password = "Required";
    //   }
    //   return errors;
    // },
    onSubmit: (values, addresses) => {
      console.log(values);
      console.log(values, addresses ,"values=====");
    },
  });

  return (
    <div>
      <Navigation />
      <form onSubmit={formik.handleSubmit} className="form-container">
        <div className="form-field">
          <label htmlFor="firstname">First Name</label>
          <input
            id="firstname"
            name="firstname"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.firstname && formik.errors.firstname ? (
            <div className="error">{formik.errors.firstname}</div>
          ) : null}
        </div>
        <div className="form-field">
          <label htmlFor="lastname">Last Name</label>
          <input
            id="lastname"
            name="lastname"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.lastname && formik.errors.lastname ? (
            <div className="error">{formik.errors.lastname}</div>
          ) : null}
        </div>
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="form-field">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="error">{formik.errors.password}</div>
          ) : null}
        </div>

        <div>
          {addresses.map((add, index) => {
            return (
              <div>
                <div>
                  <label className="form-field-label">
                    Address {index + 1}
                  </label>
                </div>
                <br />
                <div>
                  <div>
                    <label htmlFor="street">Enter Street</label>
                    <br />
                    <input
                      type="text"
                      name="street"
                      value={add.street}
                      onChange={(event) => {
                        const newAddresses = addresses;
                        newAddresses[index].street = event.target.value;
                        setAddress([...newAddresses]);
                      }}
                    />
                  </div>
                  <div>
                    <label>Enter City</label>
                    <br />
                    <input
                      type="text"
                      name="city"
                      value={add.city}
                      onChange={(event) => {
                        const newAddresses = addresses;
                        newAddresses[index].city = event.target.value;
                        setAddress([...newAddresses]);
                      }}
                    />
                  </div>
                  <div>
                    <label>Enter State</label>
                    <br/>
                    <input
                      type="text"
                      name="state"
                      value={add.state}
                      onChange={(event) => {
                        const newAddresses = addresses;
                        newAddresses[index].state = event.target.value;
                        setAddress([...newAddresses]);
                      }}
                    />
                  </div>
                </div>
                <div>
                  {index == address.length - 1 && (
                    <button
                      className="plusbutton"
                      onClick={() => {
                        addAddress();
                      }}
                    >
                      +
                    </button>
                  )}
                  <button
                    className="minusbutton"
                    onClick={() => {
                      removeAddress(index);
                    }}
                  >
                    -
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <br></br>
        <div>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
