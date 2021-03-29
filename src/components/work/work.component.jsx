import { Col, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import {
  Subtitle, Desc } from '../../App.styles'

import { 
  WorkContainer, WorkItem, WorkImage, WorkTitle 
} from './work.styles';

const Work = () => {
  return(
    <WorkContainer id='portfolio'>
      <Row className='mb-4'>
        <Col>
          <Subtitle>Portfolio</Subtitle>
          <Desc>See my latest works. <a href="https://github.com/maulanakbrr" target='_blank' rel="noreferrer">Click here to see more on github.</a></Desc>
        </Col>
      </Row>
      <Fade top delay={200} duration={1300}>
        <Row className='mr-0 ml-0'>
          <WorkItem md={4}>
            <a href="http://mlbr.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <WorkImage src={process.env.PUBLIC_URL + '/images/mlbr.jpg'} alt=""/>
            </a>
            <WorkTitle>MLBR</WorkTitle>
            <p className='text-center my-2'>
              My personal website
            </p>
          </WorkItem>

          <WorkItem md={4}>
            <a href="https://rollogreen.com/" target="_blank" rel="noopener noreferrer">
              <WorkImage src={process.env.PUBLIC_URL + '/images/rollogreen.jpg'} alt=""/>
            </a>
            <WorkTitle>Rollogreen</WorkTitle>
            <p className='text-center my-2'>
              Website to sell lands and houses <br/>
              (Client's project)
            </p>
          </WorkItem>

          <WorkItem md={4}>
            <a href="https://krown-apparel.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <WorkImage src={process.env.PUBLIC_URL + '/images/krown.jpg'} alt=""/>
            </a>
            <WorkTitle>Krown-Apparel</WorkTitle>
            <p className='text-center my-2'>
              Ecommerce web app for clothing line <br/> (dummy project)
            </p>
          </WorkItem>
        </Row>
      </Fade>
    </WorkContainer>
  );
}

export default Work;