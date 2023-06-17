import './Footer.css';
import Container from 'react-bootstrap/Container';
import ContactInfo from '../ContactInfo/ContactInfo';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedinIn, faTelegramPlane, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () =>{
   return(
    <footer className='footer'>
        <Container>
            <div className='row'>
                <div className='col-12 col-lg-3 leftFooter'>
                    <div className='TitleInfo'>
                        Personal Website
                    </div>
                    <div className="DescriptionInfo">© 2023 by Atousa Kahnazi.</div>
                </div>
                <div className='col-12 col-lg-9 rightFooter'>
                    <ContactInfo title="Phone" place="footerPlace"><a href="tel:+989352148698">+98-935-214-8698</a></ContactInfo>
                    <ContactInfo title="Email" place="footerPlace"><a href="mailto:atousakahnazi@yahoo.com">atousakahnazi@yahoo.com</a></ContactInfo>
                    <ContactInfo title="Follow" place="footerPlace">
                        <Link to="#" className='linkedin'><FontAwesomeIcon icon={faLinkedinIn} /></Link>
                        <Link to="#" className='instagram'><FontAwesomeIcon icon={faInstagram} /></Link>
                        <Link to="#" className='telegram'> <FontAwesomeIcon icon={faTelegramPlane} /></Link>
                        <Link to="#" className='whatsapp'> <FontAwesomeIcon icon={faWhatsapp} /></Link>
                    </ContactInfo>
                </div>
            </div>
        </Container>
    </footer>
   );
}

export default Footer;