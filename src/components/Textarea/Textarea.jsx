import './Textarea.css';

const Input = ({label, id, placeholder, width, rows}) => {
    return(
         <div className={`inputComponent mb-5 ${width}`}>
            <label className='mb-3' htmlFor={id}>{label}</label>
            <textarea className='p-3' placeholder={placeholder} rows={rows}/>
        </div>
    );
}
export default Input;