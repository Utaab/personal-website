import "./AboutPage.css"

import Heading from "../../components/Heading/Heading";
import Layout from "../../components/Layout/Layout";
import Container from 'react-bootstrap/Container';
import Avatar from "../../components/Avatar/Avatar";
import { HashLink } from 'react-router-hash-link';
import ResumeBox from "../../components/ResumeBox/ResumeBox";
import Skills from "../../components/Skills/Skills";
function About() {
    return<div className="aboutPage">
        <Layout>
            <Container>
                <section className="aboutme">
                    <div className="row">
                        <div className="col-lg-6 description-of-me">
                            <Heading as="h1">Atousa Kahnazi</Heading>
                            <div className="position_title">
                                Front-End Developer
                            </div>
                            <div className="description-of-me">
                                <p>
                                    I am a front-end developer who is also a UI/UX designer.
                                    <br/>
                                    coding is one of my main daily tasks. I derive my energy from writing error-free code.
                                </p>
                                <p>
                                    
Given my academic background and artistic inclination, I sought a career that would allow me to utilize both skill sets to the fullest. Hence, I started my career as a Front-End developer, occasionally delving into UI/UX design projects.
                                </p>
                                <p>
                                I have approximately 12 years of work experience and Although I am new to React, I am eager to take on the challenges it presents. I used resources such as YouTube and Codepen to teach myself React. However, because of the overwhelming amount of information available online, I decided to attend a boot camp offered by Mapsa HR.
                                <br/>
                                I have a full-time job, and for this reason, I was not able to complete the exercises well during the course. However, now I am continuing my path slowly and steadily, and I will achieve what I want.
                                </p><p>
                                My first React project was my personal website, which presented many challenges. Through this project, I was able to resolve the unclear points that I had learned through self-teaching online.                                </p>
                            </div>
                            <HashLink className="btn btn-primary" smooth to='#resumeSection'>Resume</HashLink>
                            <HashLink className="btn btn-secondary" smooth to='#skillsSection'>Skills</HashLink>
                        </div>
                        <div className="col-lg-6">
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
                </section>
            </Container>
            <div className="ContactPage pt-5 pb-5" id="resumeSection">
                <Container>
                    <Heading as="h2" direction="text-center">Resume</Heading>
                    <div className="resume_content">
                        <ResumeBox diuring="2022 - Present" position="Font-End Developer" company="MyARMAN">
                            Work at MyArman started with HTML, CSS, and JavaScript. In the past year, my accomplishments at MyArman have included implementing and redesigning the company's main website and two subsidiary websites using WordPress.
                            <br/>
                            Ultimately, with the changes made in the product team, we shifted towards React. As I mentioned earlier, I learned React, but unfortunately, the implementation of products using React has not yet started at the company.                        
                        </ResumeBox>
                        <ResumeBox diuring="2018 - 2022" position="Font-End Developer / SEO Specialist" company="IRANHOST">
                        My accomplishments at this company included:<br/>
                        <ul>
                            <li>
                            Experiencing specialized SEO courses at the WebSima Academy of Iran. and Becoming an SEO specialist.
                            </li>
                            <li>
                            Additionally, I was involved in a part of the redesign process for Iran Host's website.
                            </li>
                            <li>
                            I also designed and implemented approximately 12 promotional campaigns.
                            </li>
                        </ul>
                        </ResumeBox>
                        <ResumeBox diuring="2017 - 2018" position="Font-End Developer / UI Designer" company="PARSDATA">
                            After returning to Pars Data, I was responsible for designing and implementing clients' websites for one year.
                        </ResumeBox>
                        <ResumeBox diuring="2015 - 2018" position="Font-End Developer / UI/UX Designer" company="EHSANWEB">
                            During my time at Ehsan Web, in addition to designing and developing websites for clients based on their needs, I was also responsible for designing the UI/UX and implementing the company's main website, as well as the subsidiary website sharedata.com.
                            <br/>
                            As part of my responsibilities, I was in charge of the design and Front-End development department of the company.
                        </ResumeBox>
                        <ResumeBox diuring="2012 - 2015" position="Font-End Developer / UI Designer" company="PARSDATA">
                            When I first joined this company, I worked as a researcher for 9 months. During this time, my accomplishments included implementing news and image gallery modules version 2, as well as developing store modules and testing.
                                <br/>
                            I worked closely with other programmers and guided them in implementing requirements. After that, in addition to the responsibility of the research department, I was promoted to the position of web designer and graphic designer through my efforts and hard work.
                                <br/>
                            In this position, I was responsible for extracting customer needs for website design, and in addition to designing the UI, I also implemented it.
                        </ResumeBox>
                    </div>
                </Container>
            </div>
            <div id='skillsSection'>
                <Container>
                    <section className="skillsSection">
                        <div className="row">
                            <div className="col-lg-6 m-auto">
                                <Heading as="h2" direction="text-center">Professional skillset</Heading>
                                <div className="skillsBox">
                                    <Skills>HTML5</Skills>
                                    <Skills>CSS3</Skills>
                                    <Skills>Sass</Skills>
                                    <Skills>Bootstrap</Skills>
                                    <Skills>Javascript</Skills>
                                    <Skills>React</Skills>
                                    <Skills>Tailwind CSS</Skills>
                                    <Skills>GIT</Skills>
                                    <Skills>Github</Skills>
                                </div>
                                <Heading as="h2" direction="text-center">Languages</Heading>
                                <div className="skillsBox">
                                    <Skills>Persian (native)</Skills>
                                    <Skills>English</Skills>
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