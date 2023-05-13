import Heading from "../../components/Heading/Heading";

import Layout from "../../components/Layout/Layout";
import Container from 'react-bootstrap/Container';

function About() {
    return<div className="aboutPage">
        <Layout>
            <div className='ContactPage pt-5 pb-5'>
                <Container>
                    <Heading as="h1">This Is About Page</Heading>
                    {/* <Form /> */}
                </Container>
            </div>
        </Layout>
    </div>
}
export default About;