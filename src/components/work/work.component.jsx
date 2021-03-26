import { Col, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { WorkContainer, WorkRow, Title, Desc,
  WorkItem, WorkImage, WorkTitle 
} from './work.styles';

const Work = () => {
  return(
    <WorkContainer id='portfolio'>
      <Row>
        <Col>
          <Title>Portfolio</Title>
          <Desc>My latest works. See more</Desc>
        </Col>
      </Row>
      <Fade top delay={200} duration={1300}>
        <Row className='mr-0 ml-0'>
          <WorkItem md={4} sm={12}>
            <WorkImage src={process.env.PUBLIC_URL + '/images/mlbr.jpg'} alt=""/>
            <WorkTitle>MLBR</WorkTitle>
          </WorkItem>
          <WorkItem md={4} sm={12}>
            <WorkImage src={process.env.PUBLIC_URL + '/images/krown.jpg'} alt=""/>
            <WorkTitle>Krown-Apparel</WorkTitle>
          </WorkItem>
          <WorkItem md={4} sm={12}>
            <WorkImage src={process.env.PUBLIC_URL + '/images/rollogreen.jpg'} alt=""/>
            <WorkTitle>Rollogreen</WorkTitle>
          </WorkItem>
        </Row>
      </Fade>
    </WorkContainer>
  );
}

export default Work;