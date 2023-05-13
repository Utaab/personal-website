import './Button.css';
const Button = ({variant, type, id, disabled, children, handleClick }) =>{
    if(variant === "primary"){
        return(
            <div className='ButtonComponent mb-5'>
                <button
                    onClick={handleClick} 
                    className="btn btn-primary"
                    type={type}
                    id={id}
                    disabled={disabled}
                >
                    {children}
                </button>
            </div>
        );
    }
    if(variant === "secondary"){
        return(
            <div className='ButtonComponent mb-5'>
                <button
                    onClick={handleClick} 
                    className="btn btn-secondary"
                    type={type}
                    id={id}
                    disabled={disabled}
                >
                    {children}
                </button>
            </div>
        );
    }
    return(
        <div className='ButtonComponent mb-5'>
            <button
                onClick={handleClick} 
                className="btn btn-link"
                type={type}
                id={id}
                disabled={disabled}
            >
                {children}
            </button>
        </div>
    );
}
export default Button;

