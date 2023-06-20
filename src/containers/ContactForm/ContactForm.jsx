import React from "react";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './ContactForm.css';

const ContactSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().required('Required').matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        "Invalid email address"
      ),

    message: Yup.string().required('Required'),
  });

const ContactForm = () =>{

    return(
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                subject:'',
                message:''
            }}
            validationSchema={ContactSchema}
            onSubmit={values => {
                // same shape as initial values
               alert(JSON.stringify(values));
            }}
            >
            {({ errors, touched }) => (
                <Form>
                    <div className="d-md-flex justify-content-between">
                        <div className="formGroup col-md-6">
                            <label htmlFor="firstName">First Name:</label>
                            <Field name="firstName" placeholder="firstName"/>
                            {errors.firstName && touched.firstName ? (
                                <div className="error">{errors.firstName}</div>
                            ) : null}
                        </div>
                        <div className="formGroup col-md-6">
                            <label htmlFor="lastName">last Name:</label>
                            <Field name="lastName" placeholder="lastName"/>
                            {errors.lastName && touched.lastName ? (
                                <div className="error">{errors.lastName}</div>
                            ) : null}
                        </div>
                    </div>
                    <div className="formGroup col-12">
                        <label htmlFor="email">Email:</label>
                        <Field name="email" type="email" placeholder="email"/>
                        {errors.email && touched.email ? <div className="error">{errors.email}</div> : null}
                    </div>
                    <div className="formGroup col-12">
                        <label htmlFor="subject">Subject:</label>
                        <Field name="subject" placeholder="subject"/>
                        {errors.subject && touched.subject ? (
                            <div className="error">{errors.subject}</div>
                        ) : null}
                    </div>
                    <div className="formGroup col-12">
                        <label htmlFor="message">Message:</label>
                        <Field rows={5} as="textArea" name="message" placeholder="message"/>
                        {errors.message && touched.message ? (
                            <div className="error">{errors.message}</div>
                        ) : null}
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </Form>
            )}
        </Formik>
    );
}
export default ContactForm;