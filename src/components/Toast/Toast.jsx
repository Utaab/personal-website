import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";


import './Toast.css';

const Toast = ({children, title, variant, handleClose }) =>{
    if(variant === "success"){
        return(
            <div className="ToastComponent toastSuccess">
                <div>
                    <div className="titleToast" >{title}</div>
                    <div className="descriptionToast">{children}</div>
                </div>
                <div>
                <Link onClick={handleClose}><FontAwesomeIcon icon={faXmark} /></Link>
                </div>
            </div>
        );
    }
    if(variant === "warning"){
        return(
            <div className="ToastComponent toastWarning">
                <div>
                    <div className="titleToast" >{title}</div>
                    <div className="descriptionToast">{children}</div>
                </div>
                <div>
                <Link onClick={handleClose}><FontAwesomeIcon icon={faXmark} /></Link>
                </div>
            </div>
        );
    }
    if(variant === "info"){
        return(
            <div className="ToastComponent toastInfo">
                <div>
                    <div className="titleToast" >{title}</div>
                    <div className="descriptionToast">{children}</div>
                </div>
                <div>
                <Link onClick={handleClose}><FontAwesomeIcon icon={faXmark} /></Link>
                </div>
            </div>
        );
    }
    return(
        <div className="ToastComponent">
            <div>
                <div className="titleToast" >{title}</div>
                <div className="descriptionToast">{children}</div>
            </div>
            <div>
                <Link onClick={handleClose}><FontAwesomeIcon icon={faXmark} /></Link>
            </div>
        </div>
    );
}
export default Toast