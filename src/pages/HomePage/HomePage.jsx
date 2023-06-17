
import Heading from "../../components/Heading/Heading";
import Layout from '../../components/Layout/Layout';
import Container from 'react-bootstrap/Container';
import Avatar from "../../components/Avatar/Avatar";
import './HomePage.css';
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import SliderSlick from "../../containers/SliderSlick/SliderSlick";
import InfoBox from "../../components/InfoBox/InfoBox";

function HomePage() {
  return (
    <Layout>
        <div className='homePage pt-5 pb-5'>
            <Container>
                <section className="biography_section">
                  <Heading as="h1" direction="text-center">
                    Atousa Kahnazi<br/>
                    Front-End Developer<br/>
                    Based in Iran
                  </Heading>
                  <div className='biography'>
                      <div className='row'>
                          <div className='col-sm-6 col-lg-3 left-side'>
                            <ContactInfo title="Address">
                              <p>Ekbatan Complex, Tehran, Iran</p>
                            </ContactInfo>
                            <ContactInfo title="Email">
                              <a href="mailto:atousakahnazi@yahoo.com">atousakahnazi@yahoo.com</a>
                            </ContactInfo>
                            <ContactInfo title="Phone">
                              <a href="tel:+989352148698">+98-935-214-8698</a>
                            </ContactInfo>
                          </div>
                          <div className='col-md-12 col-lg-6 center-side'>
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
                          <div className='col-sm-6 col-lg-3 right-side'>
                            <ContactInfo title="Biography">
                              <p>Work for money and<br/> coding for love! I’m Atousa,<br/> a Front-End Developer<br/> based in iran.</p>
                            </ContactInfo>
                            <ContactInfo title="Years Of Experience" size="large">
                              12
                            </ContactInfo>
                            <ContactInfo title="Project Done" size="large">
                              4500
                            </ContactInfo>
                          </div>
                      </div>
                  </div>
                </section>
                <section className="skills_section">
                  <Heading as="h2" direction="text-center">
                    My Skills
                  </Heading>
                  <div className="skills">
                    <SliderSlick/>
                  </div>
                </section>
                <section className="skills_section">
                  <Heading as="h2" direction="text-center">
                    Education & Experience
                  </Heading>
                  <div className="education">
                    <div className="row">
                        <div className="col-md-4 ">
                          <div class="timeline_year"><div className="squer"></div>Educations</div>
                          <InfoBox title="Bachelore Degree Of Software Engineering">Tabarestan University</InfoBox>
                          <InfoBox title="Advance SEO Techniques">Websima Academy</InfoBox>
                          <InfoBox title="React Development">Mapsa HR Bootcamp</InfoBox>
                          <InfoBox title="UI/UX Design">Duxlab Academy</InfoBox>
                        </div>
                        <div className="col-md-4 ">
                          <div class="timeline_year"><div className="squer"></div> 2012-2018</div>
                          <InfoBox title="Researcher">Parsdata</InfoBox>
                          <InfoBox title="UI Designer / Front-End Developer">Parsdata</InfoBox>
                          <InfoBox title="UI Designer / Front-End Developer">Ehsan Web</InfoBox>
                        </div>
                        <div className="col-md-4 ">
                          <div class="timeline_year"><div className="squer"></div>2018-present</div>
                          <InfoBox title="UI Designer / Front-End Developer">IranHOST</InfoBox>
                          <InfoBox title="Front-End Developer">My Arman</InfoBox>
                        </div>
                    </div>
                  </div>
                </section>
            </Container>
        </div>
    </Layout>
  );
}

export default HomePage;
