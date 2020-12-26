import { Container, Row, Col , ProgressBar } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import {
  ProfessionalContainer, Title, Desc, SkillContainer, 
  Skill, SkillName, SkillProgress, SkillPercent
} from './professional.styles';

const Professional = () => {
  return(
    <ProfessionalContainer id='professional'>
      <Row>
        <Col xl={4}>
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
        <Fade right duration={1500}>
        <SkillContainer className='pt-2 pl-3'>
          <Skill>
            <SkillName>Front End </SkillName>
            <SkillProgress>
              <ProgressBar now={85}/>
            </SkillProgress>
            <SkillPercent>85%</SkillPercent>
          </Skill>
          <Skill>
            <SkillName>Back End </SkillName>
            <SkillProgress>
              <ProgressBar now={85}/>
            </SkillProgress>
            <SkillPercent>85%</SkillPercent>
          </Skill>
          <Skill>
            <SkillName>React Redux </SkillName>
            <SkillProgress>
              <ProgressBar now={85}/>
            </SkillProgress>
            <SkillPercent>85%</SkillPercent>
          </Skill>
          <Skill>
            <SkillName>Express </SkillName>
            <SkillProgress>
              <ProgressBar now={85}/>
            </SkillProgress>
            <SkillPercent>85%</SkillPercent>
          </Skill>
          <Skill>
            <SkillName>SQL </SkillName>
            <SkillProgress>
              <ProgressBar now={85}/>
            </SkillProgress>
            <SkillPercent>85%</SkillPercent>
          </Skill>
          <Skill>
            <SkillName>NoSQL </SkillName>
            <SkillProgress>
              <ProgressBar now={85}/>
            </SkillProgress>
            <SkillPercent>85%</SkillPercent>
          </Skill>
          <Skill>
            <SkillName>Photoshop </SkillName>
            <SkillProgress>
              <ProgressBar now={85}/>
            </SkillProgress>
            <SkillPercent>85%</SkillPercent>
          </Skill>
          <Skill>
            <SkillName>Premiere </SkillName>
            <SkillProgress>
              <ProgressBar now={85}/>
            </SkillProgress>
            <SkillPercent>85%</SkillPercent>
          </Skill>
          
        </SkillContainer>
        </Fade>
      </Row>
    </ProfessionalContainer>
  );
};

export default Professional;