import { useState } from 'react';
import './Input.css';

const Input = ({label, id, type, placeholder, width}) => {
    const [invalid, setInvalid] = useState(false);
    const [invalidMessage, setInvalidMessage] = useState("");

    const handleValidation = (event) =>{
        if(type === "text"){
            if(event.target.value.length <= 3 && event.target.value.length > 0) {
                setInvalid(true);
                setInvalidMessage("This field should be more than 3 characters");
            }  else{
                setInvalid(false);
            }
        } if(type === "email"){
            if(!event.target.value.includes("@") ) {
                setInvalid(true);
                setInvalidMessage("Email is not correct ");
            }  
        } 
        
    }

    return(
        <div className={`inputComponent mb-5 ${width}`} >
            <label className='mb-3' htmlFor={id}>{label}</label>
            <input className='p-3' type={type} placeholder={placeholder}  onChange={handleValidation} />
            {invalid && <span className='validationBoxError'>Error: {invalidMessage}</span>}
        </div>
    );
}
export default Input;