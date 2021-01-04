import { Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import {
  ExperienceContainer, ExpTitle, ExperienceItem
} from './experience.styles';

import DATA from './experience.data';

const Experience = () => {
  const expData = DATA;
  
  return(
    <ExperienceContainer id='experience'>
      <Row style={{ width: '100%' }}>
        <ExpTitle>Experience</ExpTitle>
      </Row>
      <Row>
        {
          expData.map((item, idx) => (
            <ExperienceItem key={idx} xl={6} md={6} sm={12} className='pr-4 mb-2'>
              <Fade bottom delay={100} duration={1400}>
                <h3>{item.place}</h3>
                <h6>{item.position}</h6>
                <span>{item.time}</span>
                <p>{item.jobDesk}</p>
              </Fade>
            </ExperienceItem>
          ))
        }
      </Row>
    </ExperienceContainer>
  );
};

export default Experience;