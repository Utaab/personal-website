import './Button.css';
const Button = ({variant, type, id, disabled, children, handleClick, loading }) =>{
    if(variant === "primary"){
        return(
            <div className='ButtonComponent mb-5'>
                <button
                    onClick={handleClick} 
                    className={`btn btn-primary ${loading ? "btnLoading" : ""}`}
                    type={type}
                    id={id}
                    disabled={disabled}
                >
                    {loading && <div className="loading">Loading ...</div>}
                    {!loading && children}
                </button>
            </div>
        );
    }
    if(variant === "secondary"){
        return(
            <div className='ButtonComponent mb-5'>
                <button
                    onClick={handleClick} 
                    className={`btn btn-secondary ${loading ? "btnLoading" : ""}`}
                    type={type}
                    id={id}
                    disabled={disabled}
                >
                    {loading && <div className="loading">Loading ...</div>}
                    {!loading && children}
                </button>
            </div>
        );
    }
    return(
        <div className='ButtonComponent mb-5'>
            <button
                onClick={handleClick} 
                className={`btn btn-link ${loading ? "btnLoading" : ""}`}
                type={type}
                id={id}
                disabled={disabled}
            >
                {loading && <div className="loading">Loading ...</div>}
                {!loading && children}
            </button>
        </div>
    );
}
export default Button;

