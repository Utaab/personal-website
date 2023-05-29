import './Input.css';

const Input = ({
    label, 
    id, 
    name, 
    type, 
    placeholder, 
    width, 
    isValid, 
    invalidMessage, 
    handleChange
}) => {
    return(
        <div className={`inputComponent mb-5 ${width}`} >
            <label className='mb-3' htmlFor={id}>{label}</label>
            <input className='p-3' 
                type={type} 
                name={name} 
                placeholder={placeholder}  
                onChange={handleChange} 
            />
            {isValid && <span className='validationBoxError'>Error: {invalidMessage}</span>}
        </div>
    );
}
export default Input;