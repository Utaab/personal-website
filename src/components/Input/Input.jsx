import './Input.css';

const Input = ({label, id, type, placeholder, width}) => {
    return(
        <div className={`inputComponent mb-5 ${width}`} >
            <label className='mb-3' htmlFor={id}>{label}</label>
            <input className='p-3' type={type} placeholder={placeholder} />
        </div>
    );
}
export default Input;