import './Textarea.css';

const Input = ({
    type, 
    label, 
    id, 
    placeholder, 
    width, 
    rows,
    isValid, 
    invalidMessage, 
    handleChange,
}) => {
    return(
         <div className={`inputComponent mb-5 ${width}`}>
            <label className='mb-3' htmlFor={id}>{label}</label>
            <textarea className='p-3' placeholder={placeholder} rows={rows} type={type} handleChange={handleChange}/>
            {isValid && <span className='validationBoxError'>Error: {invalidMessage}</span>}
        </div>
    );
}
export default Input;