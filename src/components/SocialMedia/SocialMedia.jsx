import './SocialMedia.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedinIn, faTelegramPlane, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Social = () => {
    return(
        <div className='SocialMedia'>
            <Link to="#" className='linkedin'><FontAwesomeIcon icon={faLinkedinIn} /></Link>
            <Link to="#" className='instagram'><FontAwesomeIcon icon={faInstagram} /></Link>
            <Link to="#" className='telegram'> <FontAwesomeIcon icon={faTelegramPlane} /></Link>
            <Link to="#" className='whatsapp'> <FontAwesomeIcon icon={faWhatsapp} /></Link>
        </div>
    );
}

export default Social;