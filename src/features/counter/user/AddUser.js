import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./adduser.css";
import { useDispatch } from "react-redux";

const UserForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: "",
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      lat: "",
      lng: "",
      phone: "",
      website: "",
      companyName: "",
      catchPhrase: "",
      bs: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().trim().required("Name is required"),
      username: Yup.string().trim().required("Username is required"),
      email: Yup.string()
        .trim()
        .email("Invalid email address")
        .required("Email is required"),
      street: Yup.string().trim().required("Street is required"),
      suite: Yup.string().trim().required("Suite is required"),
      city: Yup.string().trim().required("City is required"),
      zipcode: Yup.string().trim().required("Zipcode is required"),
      lat: Yup.string().trim().required("Latitude is required"),
      lng: Yup.string().trim().required("Longitude is required"),
      phone: Yup.string().trim().required("Phone is required"),
      website: Yup.string()
        .trim()
        .url("Invalid URL")
        .required("Website is required"),
      companyName: Yup.string().trim().required("Company Name is required"),
      catchPhrase: Yup.string().trim().required("Catch Phrase is required"),
      bs: Yup.string().trim().required("BS is required"),
    }),
    onSubmit: (values) => {
      console.log("Form data", values);
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="form-container">
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="form-field">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          {formik.touched.username && formik.errors.username ? (
            <div className="error">{formik.errors.username}</div>
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
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="form-field">
          <label htmlFor="street">Street</label>
          <input
            id="street"
            name="street"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.street}
          />
          {formik.touched.street && formik.errors.street ? (
            <div className="error">{formik.errors.street}</div>
          ) : null}
        </div>

        <div className="form-field">
          <label htmlFor="suite">Suite</label>
          <input
            id="suite"
            name="suite"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.suite}
          />
          {formik.touched.suite && formik.errors.suite ? (
            <div className="error">{formik.errors.suite}</div>
          ) : null}
        </div>

        <div className="form-field">
          <label htmlFor="city">City</label>
          <input
            id="city"
            name="city"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.city}
          />
          {formik.touched.city && formik.errors.city ? (
            <div className="error">{formik.errors.city}</div>
          ) : null}
        </div>

        <div className="form-field">
          <label htmlFor="zipcode">Zipcode</label>
          <input
            id="zipcode"
            name="zipcode"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.zipcode}
          />
          {formik.touched.zipcode && formik.errors.zipcode ? (
            <div className="error">{formik.errors.zipcode}</div>
          ) : null}
        </div>

        <div className="form-field">
          <label htmlFor="lat">Latitude</label>
          <input
            id="lat"
            name="lat"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lat}
          />
          {formik.touched.lat && formik.errors.lat ? (
            <div className="error">{formik.errors.lat}</div>
          ) : null}
        </div>

        <div className="form-field">
          <label htmlFor="lng">Longitude</label>
          <input
            id="lng"
            name="lng"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lng}
          />
          {formik.touched.lng && formik.errors.lng ? (
            <div className="error">{formik.errors.lng}</div>
          ) : null}
        </div>

        <div className="form-field">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className="error">{formik.errors.phone}</div>
          ) : null}
        </div>

        <div className="form-field">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            name="website"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.website}
          />
          {formik.touched.website && formik.errors.website ? (
            <div className="error">{formik.errors.website}</div>
          ) : null}
        </div>

        <div className="form-field">
          <label htmlFor="companyName">Company Name</label>
          <input
            id="companyName"
            name="companyName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.companyName}
          />
          {formik.touched.companyName && formik.errors.companyName ? (
            <div className="error">{formik.errors.companyName}</div>
          ) : null}
        </div>

        <div className="form-field">
          <label htmlFor="catchPhrase">Catch Phrase</label>
          <input
            id="catchPhrase"
            name="catchPhrase"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.catchPhrase}
          />
          {formik.touched.catchPhrase && formik.errors.catchPhrase ? (
            <div className="error">{formik.errors.catchPhrase}</div>
          ) : null}
        </div>

        <div className="form-field">
          <label htmlFor="bs">BS</label>
          <input
            id="bs"
            name="bs"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.bs}
          />
          {formik.touched.bs && formik.errors.bs ? (
            <div className="error">{formik.errors.bs}</div>
          ) : null}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
