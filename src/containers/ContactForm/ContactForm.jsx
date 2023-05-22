import React, { useState } from "react"; 
import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import Textarea from "../../components/Textarea/Textarea";
import Toast from "../../components/Toast/Toast";

const ContactForm = () =>{
    const [toastState, setToast] = useState(false);
    /* const handleClick = (event) =>{
        event.preventDefault();
        console.log("welcome");
    }; */

    const handleClose = (event) =>{
        event.preventDefault();
        setToast(false)
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        /*----------------------- when use free api
        await fetch('https://dummyjson.com/users/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              firstName: 'Atousa',
              lastName: 'Kahnazi',
              age: 25,
              /* other user data *
            })
        })
          .then(res => res.json())
          .then(console.log);
        -----------------------*/

        /*----------------------- when write API
           await fetch('http://localhost:3000/public/mock/contactAPI.json', {
             method: 'GET',
             headers: { 'Content-Type': 'application/json' },
           })
           .then(res => res.json())
           .then(console.log);
        -----------------------*/

        /*----------------------- when generate my API and set it */
        const responseJSON = await fetch(
            "https://testapi.io/api/utaab/contactForm",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body:JSON.stringify({
                    firstName: 'Atousa',
                    lastName: 'Kahnazi',
                    age: 25,
                }),
            }
        );
        /*-----------------------*/
        
        const response= await responseJSON.json();
        if(response.status){
            setToast(response)
        }
    }
    
    return(
        <Form handleSubmit={handleSubmit}>
            <div className="d-flex justify-content-between">
                <Input label="First Name:" id="firstname" type="text" placeholder="First Name" width="w-50"/>
                <Input label="Last Name:" id="lastName" type="text" placeholder="Last Name"  width="w-50"/>
            </div>
            <Input label="Email:" id="email" type="email" placeholder="Email"  width="w-100"/>
            <Input label="Subject:" id="subject" type="text" placeholder="Subject"  width="w-100"/>
            <Textarea label="Message:" id="message" placeholder="Your Message"  width="w-100" rows="5"/>    
            <Button id="SubmitContactForm" type="Submit" variant="primary">Submit</Button>
            {toastState && <Toast title="Thank You" variant="success" handleClose={handleClose}>{toastState.message}</Toast>}
        </Form>
    );
}
export default ContactForm;