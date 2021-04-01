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
        <ExperienceItem md={6} xs={12}>
          <Fade bottom delay={100} duration={1400}>
            <ExperienceJob>Freelance Web Developer</ExperienceJob>
            <h6>Self Employed | 2019 - Now</h6>
            <p>I Work on projects provided by client by applying innovative and creative ideas for each project that is done. Standarized all output with new, responsive mobile first-approach and strategy.</p>
            <p>Project: pilarjuanda, rollogreen</p>
          </Fade>
        </ExperienceItem>
        <Col md={6} xs={12}>
          <ImageBox>
            <Image src={process.env.PUBLIC_URL + '/images/eezy_18.svg'} fluid/>
          </ImageBox>
        </Col>
        
      </Row>
    </ExperienceContainer>
  );
};

export default Experience;