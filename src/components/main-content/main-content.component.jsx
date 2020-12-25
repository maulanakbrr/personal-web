
import { Col } from 'react-bootstrap';
import { 
  MainContainer, Title, Content 
} from './main-content.styles';

const MainContent = () => {
  return(
    <MainContainer>
      <Title>
        <Col lg={12}>
          <h1>Maulana Akbar</h1>
        </Col>
      </Title>
      <Content>
        <Col lg={4} sm={12}>
          <p className='text-justify'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum quos voluptates sunt non placeat quaerat sit eveniet accusantium omnis, accusamus ea illo blanditiis quisquam odit dolorem libero odio natus rem?
          </p>
        </Col>
        <Col lg={4} sm={12}>
          <p className='text-justify'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt aut adipisci voluptatibus laboriosam nostrum fugiat? Officia laudantium perspiciatis nisi ipsum rem, est placeat architecto explicabo consequatur voluptas, sapiente beatae facere?

          </p>
        </Col>
        <Col lg={4} sm={12}>
          <p className='text-justify'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda nulla iste magnam numquam, error similique nihil hic ad iure, accusantium debitis earum. Doloribus quod nobis consequatur aliquid qui ratione culpa.
          </p>
        </Col>
      </Content>

    </MainContainer>
  );
};

export default MainContent;

