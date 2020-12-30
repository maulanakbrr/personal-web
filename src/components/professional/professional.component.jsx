import { Container, Row, Col , ProgressBar } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import {
  ProfessionalContainer, Title, Desc, SkillContainer, 
  Skill, SkillName, SkillProgress, SkillPercent
} from './professional.styles';

const Professional = () => {
  return(
    <ProfessionalContainer id='professional'>
      <Row >
        <Col lg={4} xs={12}>
          <Container fluid>
            <Row>
              <Title>Professional</Title>    
            </Row>
            <Row>
              <Desc className='text-justify'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi illum possimus nesciunt harum dolore omnis dolorum.
              </Desc>
            </Row>  
          </Container>
        </Col>
        <SkillContainer lg={8} xs={12} className='pt-2 pl-3'>
        <Fade right duration={1500}>
          <Skill>
            <SkillName xs={3}>Front End</SkillName>
            <SkillProgress xs={8}>
              <ProgressBar now={85}/>
            </SkillProgress>
            <SkillPercent xs={1}>85%</SkillPercent>
          </Skill>
          <Skill>
            <SkillName xs={3}>Front End</SkillName>
            <SkillProgress xs={8}>
              <ProgressBar now={85}/>
            </SkillProgress>
            <SkillPercent xs={1}>85%</SkillPercent>
          </Skill>
          <Skill>
            <SkillName xs={3}>Front End</SkillName>
            <SkillProgress xs={8}>
              <ProgressBar now={85}/>
            </SkillProgress>
            <SkillPercent xs={1}>85%</SkillPercent>
          </Skill>
          <Skill>
            <SkillName xs={3}>Front End</SkillName>
            <SkillProgress xs={8}>
              <ProgressBar now={85}/>
            </SkillProgress>
            <SkillPercent xs={1}>85%</SkillPercent>
          </Skill>
          <Skill>
            <SkillName xs={3}>Front End</SkillName>
            <SkillProgress xs={8}>
              <ProgressBar now={85}/>
            </SkillProgress>
            <SkillPercent xs={1}>85%</SkillPercent>
          </Skill>
        </Fade>
        </SkillContainer>
      </Row>
    </ProfessionalContainer>
  );
};

export default Professional;