
import Heading from "../../components/Heading/Heading";
import Layout from '../../components/Layout/Layout';
import Container from 'react-bootstrap/Container';

import './HomePage.css';

function HomePage() {
  return (
    <Layout>
        <div className='homePage pt-5 pb-5'>
            <Container>
                <Heading as="h1" direction="text-center">This Is Home Page</Heading>
                <div className='div-white-center mx-auto mt-5'>
                    <div className='row'>
                        <div className='col-lg-12'>
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
