import "./AboutPage.css"

import Heading from "../../components/Heading/Heading";
import Layout from "../../components/Layout/Layout";
import Container from 'react-bootstrap/Container';
import Avatar from "../../components/Avatar/Avatar";

function About() {
    return<div className="aboutPage">
        <Layout>
            <div className='pt-5 pb-5'>
                <Container>
                    <section className="aboutme">
                        <div className="row">
                            <div className="col-lg-6">
                                <Heading as="h1">Atousa Kahnazi</Heading>
                                <div className="position_title">
                                    Front-End Developer
                                </div>
                                <div className="description-of-me">
                                    <p>
                                        I am a Front-End develope.
                                        <br/>
                                        Coding is one of my main daily tasks. I get my energy from codes without errors.
                                    </p>
                                    <p>
                                        I have been working in the field of website design and Front-End development for about 12 years.
                                    </p>
                                    <p>
                                        I'm new to React and I'm ready for the challenges involved.<br/>
                                        At first, I took help from YouTube, Codepen, etc. to set up React as a self-study method, but due to overload information that provide in the Internet,
                                        I decided to go to the Mapsa HR bootcamp and started it in February.<br/>
                                        Since I have a full-time job, I was not able to spend much time on personal projects during the course. 
                                        But as much as I could during the classes and after until now I did all my exercises slowly and steadily.
                                    </p><p>
                                        The first project that I coded with React was this personal website for myself, in which I faced many challenges and I can say that all the incomprehensible points that I had learned from the Internet by self-learning were solved for me.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="description-of-me">
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
                            </div>
                        </div>
                    </section>
                </Container>
            </div>
        </Layout>
    </div>
}
export default About;