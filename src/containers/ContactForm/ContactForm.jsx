import React from "react";
import { useFormik } from "formik";
import './ContactForm.css';

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
        }
    });
    return(
        <form onSubmit={formik.handleSubmit}>
            <div className="d-flex justify-content-between">
                <div className="formGroup col-6">
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}  
                    />
                </div>
                <div className="formGroup col-6">
                    <label htmlFor="lastName">last Name:</label>
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.lastName}  
                    />
                </div>
            </div>
            <div className="formGroup col-12">
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    name="email"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.email}  
                />
            </div>
            <div className="formGroup col-12">
                <label htmlFor="subject">Subject:</label>
                <input
                    id="subject"
                    name="subject"
                    type="text"
                    onChange={formik.handleChange}
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
                    value={formik.values.message}  
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}
export default ContactForm;