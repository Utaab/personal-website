import React from "react";
import { useFormik } from "formik";
import './ContactForm.css';

const validate = values => {
    const errors = {};
    if(!values.firstName){
        errors.firstName = 'Required Field';
    }
    if(!values.lastName){
        errors.lastName = 'Required Field';
    }
    if(!values.email){
        errors.email = 'Required Field';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if(!values.message){
        errors.message = 'Required Field';
    }
    return errors;
}

const ContactForm = () =>{
    const formik = useFormik({
        initialValues: {
            firstName : "",
            lastName : "",
            subject : "",
            email : "",
            message : "",
        },
        onSubmit:values =>{
            alert(JSON.stringify(values));
        },
        validate,
    });
    return(
        <form onSubmit={formik.handleSubmit}>
            <div className="d-md-flex justify-content-between">
                <div className="formGroup col-md-6">
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}  
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (<span className="error">{formik.errors.firstName}</span>) : null}
                </div>
                <div className="formGroup col-md-6">
                    <label htmlFor="lastName">last Name:</label>
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName}  
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (<span className="error">{formik.errors.lastName}</span>): null}
                </div>
            </div>
            <div className="formGroup col-12">
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    name="email"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}  
                />
                {formik.touched.email && formik.errors.email ? (<span className="error">{formik.errors.email}</span>): null}
            </div>
            <div className="formGroup col-12">
                <label htmlFor="subject">Subject:</label>
                <input
                    id="subject"
                    name="subject"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.subject}  
                />
                
            </div>
            <div className="formGroup col-12">
                <label htmlFor="message">Message:</label>
                <textarea
                    rows="5"
                    id="message"
                    name="message"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}  
                />
                {formik.touched.message && formik.errors.message ? (<span className="error">{formik.errors.message}</span>): null}
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}
export default ContactForm;