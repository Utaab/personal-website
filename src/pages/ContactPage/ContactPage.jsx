import './ContactPage.css'
import Heading from "../../components/Heading/Heading";
import Layout from "../../components/Layout/Layout";
import Container from 'react-bootstrap/Container';
import ContactForm from "../../containers/ContactForm/ContactForm";
// import Form from "../../components/Form/Form";
import Social from '../../components/SocialMedia/SocialMedia';
import ContactInfo from '../../components/ContactInfo/ContactInfo';

function Contact() {
    return(
        <Layout>
            <div className='ContactPage pt-5 pb-5'>
                <Container>
                    <Heading as="h1" direction="text-center">Let's get Contact an estimate</Heading>
                    <div className='div-white-center mx-auto mt-5'>
                        <div className='row'>
                            <div className='col-lg-3'>
                                <ContactInfo title="Address">Tehran, Iran</ContactInfo>
                                <ContactInfo title="Email"><a href="mailto:atousakahnazi@yahoo.com">atousakahnazi@yahoo.com</a></ContactInfo>
                                <ContactInfo title="Phone"><a href="tel:+989352148698">+98-935-214-8698</a></ContactInfo>
                                <Social />
                            </div>
                            <div className='col-lg-9'>
                                <ContactForm/>
                            </div>
                        </div>
                    </div>
                    {/* <Form /> */}
                </Container>
            </div>
        </Layout>
    );
}
export default Contact;