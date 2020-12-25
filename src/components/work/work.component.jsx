import { Col } from 'react-bootstrap';
import { WorkContainer, WorkRow, Title, Desc,
  WorkItem, WorkImage, WorkTitle 
} from './work.styles';

const Work = () => {
  return(
    <WorkContainer>
      <WorkRow>
        <Col>
          <Title>Portfolio</Title>
          <Desc>My latest works. See more</Desc>
        </Col>
      </WorkRow>
      <WorkRow>
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
    </WorkContainer>
  );
}

export default Work;