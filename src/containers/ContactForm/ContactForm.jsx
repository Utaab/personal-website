import React, { useState } from "react"; 
import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import Textarea from "../../components/Textarea/Textarea";
import Toast from "../../components/Toast/Toast";

const ContactForm = () =>{
    /* const [formData, setFormData ] = useState({
         firstName:{
             value: "",
             validation: {
                 required: true,
                 minLength: 3,
             },
             invalidMessage: "",
             valid: false,
         },
         lastName:{
             value: "",
             validation: {
                 required: true,
                 minLength: 3,
             },
             invalidMessage: "",
             valid: false,
         },
         subject:{
             value: "",
             validation: {
                 required: true,
                 minLength: 3,
             },
             invalidMessage: "",
             valid: false,
         },
         email:{
             value: "",
             validation: {
                 required: true,
                 isEmail: true,
             },
             invalidMessage: "",
             valid: false,
         },
         message:{
             value: "",
             validation: {
                 required: true,
                 minLength: 3,
             },
             invalidMessage: "",
             valid: false,
         }
     });*/
    const [toastState, setToast] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChangeInput = (event) => {
        /* const {name , value } = event.taget;
          setFormData({
             ...formData,
             [name]: {
                 ...formData[name],
                 value, // value:value,
                 //valid: checkValidity(value, formData[id].validation),
             },
          });*/
    };



    const handleClose = (event) =>{
        event.preventDefault();
        setToast(false)
    };
    const handleSubmit = async (event) => {
        setLoading(true);
        event.preventDefault();
        /*----------------------- when generate my API and set it */
        const responseJSON = await fetch(
            "https://testapi.io/api/utaab/contactForm",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body:JSON.stringify({
                    firstName: event.target[0].value,
                    lastName: event.target[1].value,
                    subject: event.target[2].value,
                    email: event.target[3].value,
                    textArea:  event.target[4].value,
                }),
            }
        );
        /*-----------------------*/
        
        const response= await responseJSON.json();
        if(response.status){
            setToast(response)
        }
        setLoading(false);
    }
    //console.log("formData", formData);
    return(
        <Form handleSubmit={handleSubmit}>
            <div className="d-flex justify-content-between">
                <Input 
                    label="First Name:" 
                    id="firstName" 
                    name = "firstName"
                    type="text" 
                    placeholder="First Name" 
                    width="w-50"
                    /*isValid = {formData.firstname.valid}
                    invalidMessage = {formData.firstname.invalidMessage}*/
                    handleChange = {handleChangeInput}
                />
                <Input 
                    label="Last Name:" 
                    id="lastName" 
                    name = "lastName"
                    type="text" 
                    placeholder="Last Name"  
                    width="w-50"
                    /*isValid = {formData.lastName.valid}
                    invalidMessage = "Erroe: This field should be more than 3 characters"*/
                    handleChange = {handleChangeInput}
                />
            </div>
            <Input 
                label="Email:" 
                id="email" 
                name = "email"
                type="email" 
                placeholder="Email"  
                width="w-100"
                /*isValid = {formData.email.valid}
                invalidMessage = "Error: Email is not correct"*/
                handleChange = {handleChangeInput}
            />
            <Input 
                label="Subject:" 
                id="subject" 
                name = "subject"
                type="text" 
                placeholder="Subject"  
                width="w-100"
                /*isValid = {formData.subject.valid}
                invalidMessage = "Erroe: This field should be more than 3 characters"*/
                handleChange = {handleChangeInput}
            />
            <Textarea 
                label="Message:" 
                id="message" 
                placeholder="Your Message"  
                width="w-100" 
                rows="5" 
                type="textArea"
                /*isValid = {formData.message.valid}
                invalidMessage = "Erroe: This field should be more than 3 characters"*/
                handleChange = {handleChangeInput}
            />    
            <Button 
                id="SubmitContactForm" 
                type="Submit" 
                variant="primary" 
                loading={loading}
            >
                Submit
            </Button>
            {toastState && <Toast title="Thank You" variant="success" handleClose={handleClose}>{toastState.message}</Toast>}
        </Form>
    );
}
export default ContactForm;