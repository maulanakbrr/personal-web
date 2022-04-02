import { Container, Row, Col , ProgressBar } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import { Subtitle, Desc } from '../../App.styles';

import {
  ProfessionalContainer, SkillContainer, 
  Skill, SkillName, SkillProgress, SkillPercent
} from './professional.styles';

import DATA from './professional.data';

const Professional = () => {
  const skillData = DATA;

  return(
    <ProfessionalContainer id='professional'>
      <Subtitle style={{ textAlign: 'left', width: '100%', marginBottom: '1rem' }}>Skill</Subtitle>

      {/* <Container fluid> */}
        <Row >
          <Col md={6} xs={12} style={{ textAlign: 'left', marginBottom: '1rem' }}>
            <h3>Front-end</h3>
            <Fade top duration={1500}>
              <Row>
                <Col xs={6}>
                  <h6>Programming Language</h6>
                  <p>Javascript (ES6, ES7, Node.Js)</p>
                </Col>
                <Col xs={6}>
                  <h6>Framework</h6>
                  <p>React.js, Next.js, Bootstrap, Antd, Semantic</p>
                </Col>
                <Col xs={6}>
                  <h6>Version Control</h6>
                  <p>Git</p>
                </Col>
                <Col xs={6}>
                  <h6>Package Manager</h6>
                  <p>NPM, Yarn</p>
                </Col>
                <Col xs={6}>
                  <h6>Deployment</h6>
                  <p>Heroku, Vercel</p>
                </Col>
                <Col xs={6}>
                  <h6>Library</h6>
                  <p>Sass, axios, react-router, redux, styled components</p>
                </Col>
              </Row>
              
            </Fade>
            {/* <Container fluid>
              
              <Row>
                <Desc className='text-justify'>
                  I'm capable using react and redux for building web app. I also know how to build web app using MERN stack and PERN stack. I can build reusable code and components for future use.
                </Desc>
              </Row>  
            </Container> */}
          </Col>

          <Col md={6} xs={12} style={{ textAlign: 'left' }}>
            <h3>Back-end</h3>
            <Fade top duration={1500}>
              <Row>
                <Col xs={6}>
                  <h6>Framework</h6>
                  <p>Express.Js</p>
                </Col>
                <Col xs={6}>
                  <h6>Database</h6>
                  <p>PostgreSQL, MySQL, MongoDB</p>
                </Col>
                <Col xs={6}>
                  <h6>Other</h6>
                  <p>Rest API</p>
                </Col>
              </Row>
            </Fade>
          </Col>
        </Row>
      {/* </Container> */}
      {/* <SkillContainer lg={8} xs={12} className='pt-2'>
        <Fade right duration={1500}>
          {
            skillData.map((item, idx) => (
              <Skill key={idx}>
                <SkillName lg={3} md={3} sm={3} xs={12}>{item.skillName}</SkillName>
                <SkillProgress lg={8} md={8} sm={7} xs={9}>
                  <ProgressBar now={item.percent}/>
                </SkillProgress>
                <SkillPercent lg={1} md={1} sm={2} xs={3}>{item.percent}%</SkillPercent>
              </Skill>
            ))
          }
        </Fade>
      </SkillContainer> */}
    </ProfessionalContainer>
  );
};

export default Professional;