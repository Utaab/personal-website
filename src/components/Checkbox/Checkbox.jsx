import './Checkbox.css';

const Checkbox = ({children}) =>{
    return(
        <div className='checkbox'>
            <input type="checkbox" />
            <lable>{children}</lable>
        </div>
    );
}
export default Checkbox;