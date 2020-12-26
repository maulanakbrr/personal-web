import { Row, Col } from 'react-bootstrap';
import {
  ExperienceContainer, Title
} from './experience.styles';

const Experience = () => {
  return(
    <ExperienceContainer>
      
      <Row>
        <Title>Experience</Title>
      </Row>
      <Row>
        <Col xl={6} className='text-justify pr-4 mb-2'>
          <h3>AIUEO</h3>
          <h6>Front End</h6>
          <span>2018</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione placeat ex provident iure. Non repudiandae error ab tempora nemo laboriosam? Ullam a similique ab dolores molestiae quasi. A, maiores id!</p>
        </Col>
        <Col xl={6} className='text-justify pr-4 mb-2'>
          <h3>AIUEO</h3>
          <h6>Front End</h6>
          <span>2018</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione placeat ex provident iure. Non repudiandae error ab tempora nemo laboriosam? Ullam a similique ab dolores molestiae quasi. A, maiores id!</p>
        </Col>
        <Col xl={6} className='text-justify pr-4 mb-2'>
          <h3>AIUEO</h3>
          <h6>Front End</h6>
          <span>2018</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione placeat ex provident iure. Non repudiandae error ab tempora nemo laboriosam? Ullam a similique ab dolores molestiae quasi. A, maiores id!</p>
        </Col>
        <Col xl={6} className='text-justify pr-4 mb-2'>
          <h3>AIUEO</h3>
          <h6>Front End</h6>
          <span>2018</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione placeat ex provident iure. Non repudiandae error ab tempora nemo laboriosam? Ullam a similique ab dolores molestiae quasi. A, maiores id!</p>
        </Col>
      </Row>
    </ExperienceContainer>
  );
};

export default Experience;