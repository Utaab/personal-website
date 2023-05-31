
import Heading from "../../components/Heading/Heading";
import Layout from '../../components/Layout/Layout';
import Container from 'react-bootstrap/Container';
import Avatar from "../../components/Avatar/Avatar";
import './HomePage.css';
import ContactInfo from "../../components/ContactInfo/ContactInfo";

function HomePage() {
  return (
    <Layout>
        <div className='homePage pt-5 pb-5'>
            <Container>
                <Heading as="h1" direction="text-center">
                  Atousa Kahnazi<br/>
                  Front-End Developer<br/>
                  Based in Tehran
                </Heading>
                <div className='mt-5'>
                    <div className='row'>
                        <div className='col-lg-3'>
                          <ContactInfo title="Phone" place="footerPlace"><a href="tel:+989352148698">+98-935-214-8698</a></ContactInfo>
                        </div>
                        <div className='col-lg-6'>
                          <div className="img-block">
                            <div className="bubble-img">
                              <Avatar image="/images/about-me-bubble.aa4c00ebbc1e72dc3150.png" alt="bubble background" />
                            </div>
                            <div className="inner-img-block">
                              <Avatar image="/images/atousakahnazi.jpg" alt="Atousa Kahnazi" />
                            </div>
                            <div className="wave-img">
                              <Avatar image="/images/about-me-main-image-layer-2.png" alt="wave background" />
                            </div>
                          </div>
                        </div>
                        <div className='col-lg-3'>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    </Layout>
  );
}

export default HomePage;
