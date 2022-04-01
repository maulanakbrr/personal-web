import { Col, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import {
  Subtitle, Desc } from '../../App.styles'

import { 
  WorkContainer, WorkItem, WorkLink, WorkImage, WorkTitle 
} from './work.styles';

const Work = () => {
  return(
    <WorkContainer id='portfolio'>
      <Row className='mb-4'>
        <Col className='portfolio-head'>
          <Subtitle>Portfolio</Subtitle>
          <Desc>See my latest works. <a href="https://github.com/maulanakbrr" target='_blank' rel="noreferrer">Click here to see more on github.</a></Desc>
        </Col>
      </Row>
      {/* <Fade top delay={200} duration={1300}> */}
        <Row className='mr-0 ml-0' style={{ width: '100%' }}>
          <WorkItem sm={4} style={{ textAlign: 'left' }}>
            <Fade top delay={100} duration={1300}>
              <WorkTitle>Kopra by Mandiri</WorkTitle>

              <p style={{ textAlign: 'justify' }}> 
                Kopra by Mandiri is wholesale digital super platform. This service is to accommodate the increasingly dynamic needs and ecosystem of wholesale customers, which are the existing core-business of Bank Mandiri. 
              </p>

              <a href="https://kopra.bankmandiri.co.id/" target='_blank' rel="noopener noreferrer">
                Go to project
              </a>
            </Fade>           
          </WorkItem>

          <WorkItem sm={4} style={{ textAlign: 'left' }}>
            <Fade top delay={200} duration={1300}>
              <WorkTitle>Beri Benih</WorkTitle>

              <p style={{ textAlign: 'justify' }}> 
                Company profile and e-commerce web.
              </p>

              <a href="https://beribenih-frontend.vercel.app/" target='_blank' rel="noopener noreferrer">
                Go to project
              </a>
            </Fade>
          </WorkItem>

          <WorkItem sm={4} style={{ textAlign: 'left' }}>
            <Fade top delay={300} duration={1300}>
              <WorkTitle>Krown Apparel</WorkTitle>

              <p style={{ textAlign: 'justify' }}> 
                An e-commerce web who focused on selling clothes.
              </p>

              <a href="https://krown-apparel.herokuapp.com/" target='_blank' rel="noopener noreferrer">
                Go to project
              </a>
            </Fade>
          </WorkItem>

          {/* <WorkItem sm={4}>
            <WorkLink href="https://krown-apparel.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <WorkImage src={process.env.PUBLIC_URL + '/images/krown-2.jpg'} alt=""/>
            </WorkLink>
            <WorkTitle>Krown-Apparel</WorkTitle>
            <p className='text-center my-2'>
              Ecommerce web app for clothing line <br/> (dummy project)
            </p>
          </WorkItem> */}
        </Row>
      {/* </Fade> */}
    </WorkContainer>
  );
}

export default Work;