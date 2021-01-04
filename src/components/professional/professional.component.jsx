import { Container, Row, Col , ProgressBar } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import {
  ProfessionalContainer, ProfessionalTitle, ProfessionalDesc, SkillContainer, 
  Skill, SkillName, SkillProgress, SkillPercent
} from './professional.styles';

import DATA from './professional.data';

const Professional = () => {
  const skillData = DATA;

  return(
    <ProfessionalContainer id='professional'>
      <Row >
        <Col lg={4} xs={12}>
          <Container fluid>
            <Row>
              <ProfessionalTitle>Professional</ProfessionalTitle>    
            </Row>
            <Row>
              <ProfessionalDesc className='text-justify'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi illum possimus nesciunt harum dolore omnis dolorum.
              </ProfessionalDesc>
            </Row>  
          </Container>
        </Col>
        <SkillContainer lg={8} xs={12} className='pt-2 pl-3'>
          <Fade right duration={1500}>
            {
              skillData.map((item, idx) => (
                <Skill key={idx}>
                  <SkillName lg={3} md={3} sm={3} xs={12}>{item.skillName}</SkillName>
                  <SkillProgress lg={8} md={8} sm={7} xs={9}>
                    <ProgressBar now={item.percent}/>
                  </SkillProgress>
                  <SkillPercent md={1} xs={3}>{item.percent}%</SkillPercent>
                </Skill>
              ))
            }
          </Fade>
        </SkillContainer>
      </Row>
    </ProfessionalContainer>
  );
};

export default Professional;