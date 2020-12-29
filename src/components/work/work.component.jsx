import { Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { WorkContainer, WorkRow, Title, Desc,
  WorkItem, WorkImage, WorkTitle 
} from './work.styles';

const Work = () => {
  return(
    <WorkContainer id='portfolio'>
      <WorkRow>
        <Col>
          <Title>Portfolio</Title>
          <Desc>My latest works. See more</Desc>
        </Col>
      </WorkRow>
      <Fade top delay={200} duration={1300}>
        <WorkRow className='mr-0 ml-0'>
          <WorkItem xl={3} md={6} xs={12}>
            <WorkImage src={process.env.PUBLIC_URL + '/images/profile-2.jpg'} alt=""/>
            <WorkTitle>HAI</WorkTitle>
          </WorkItem>
          <WorkItem xl={3} md={6} xs={12}>
            <WorkImage src={process.env.PUBLIC_URL + '/images/slide-2.jpg'} alt=""/>
            <WorkTitle>HAI</WorkTitle>
          </WorkItem>
          <WorkItem xl={3} md={6} xs={12}>
            <WorkImage src={process.env.PUBLIC_URL + '/images/slide-2.jpg'} alt=""/>
            <WorkTitle>HAI</WorkTitle>
          </WorkItem>
          <WorkItem xl={3} md={6} xs={12}>
            <WorkImage src={process.env.PUBLIC_URL + '/images/slide-2.jpg'} alt=""/>
            <WorkTitle>HAI</WorkTitle>
          </WorkItem>
        </WorkRow>
      </Fade>
    </WorkContainer>
  );
}

export default Work;