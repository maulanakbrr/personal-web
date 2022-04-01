import { Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import { Col, Image } from 'react-bootstrap';

import { Subtitle } from '../../App.styles';

import {
  ExperienceContainer, ImageBox, ExperienceItem, ExperienceJob
} from './experience.styles';

const Experience = () => {
  
  return(
    <ExperienceContainer id='experience'>
      <Subtitle className='experience-title text-justify'>Experience</Subtitle>

      <Row>
        <ExperienceItem xs={12}>
          <Fade bottom delay={100} duration={1400}>
            <ExperienceJob>Front-end Developer</ExperienceJob>
            <h6>PT. Infracom Technology | May 2021 - Now</h6>
            <p>I worked on Kopra by Mandiri. I developed features like virtual assistant, feature form registrations and many more.</p>
            <p>Project: Kopra by Mandiri</p>
          </Fade>
        </ExperienceItem>

        <ExperienceItem xs={12}>
          <Fade bottom delay={100} duration={1400}>
            <ExperienceJob>Web Developer</ExperienceJob>
            <h6>Self-employed | Jul 2020 - Now</h6>
            <p>I Work on projects provided by client by applying innovative and creative ideas for each project that is done. Standarized all output with new, responsive mobile first-approach and strategy.</p>
            <p>Project: krown-apparel, Beribenih, Rollogreen</p>
          </Fade>
        </ExperienceItem>

        <ExperienceItem xs={12}>
          <Fade bottom delay={100} duration={1400}>
            <ExperienceJob>Web Developer</ExperienceJob>
            <h6>CV. Teknologi Kreatif Indonesia | Oct 2018 - Jun 2019</h6>
            <p>I worked on projects using Laravel.</p>
            <p>Project: Pilarjuanda</p>
          </Fade>
        </ExperienceItem>


        {/* <Col md={6} xs={12}>
          <ImageBox>
            <Image src={process.env.PUBLIC_URL + '/images/eezy_18.svg'} fluid/>
          </ImageBox>
        </Col> */}
        
      </Row>
    </ExperienceContainer>
  );
};

export default Experience;