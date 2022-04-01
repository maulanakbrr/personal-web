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
      <Subtitle style={{ textAlign: 'left', width: '100%' }}>Skill</Subtitle>

      <Row >
        <Col lg={6} xs={12} style={{ textAlign: 'left' }}>
          <h3>Front-end</h3>
          <Fade top duration={1500}>
            <p>
              HTML, CSS, JavaScript, Sass, Bootstrap, Antd, Semantic, Node.js, React, Next, Redux, Git, Bitbucket, npm, Yarn, Vercel, Heroku, styled components
            </p>
          </Fade>
          {/* <Container fluid>
            
            <Row>
              <Desc className='text-justify'>
                I'm capable using react and redux for building web app. I also know how to build web app using MERN stack and PERN stack. I can build reusable code and components for future use.
              </Desc>
            </Row>  
          </Container> */}
        </Col>

        <Col lg={6} xs={12} style={{ textAlign: 'left' }}>
          <h3>Back-end and Database</h3>
          <Fade top duration={1500}>
            <p>
              Express.Js, PostgreSQL, MySQL, MongoDB, REST API
            </p>
          </Fade>
        </Col>
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
      </Row>
    </ProfessionalContainer>
  );
};

export default Professional;