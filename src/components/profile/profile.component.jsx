import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
import {
  ProfileContainer, ProfileImageContainer, Image, ProfileTitle, ProfileDesc, IconsContainer, Icon
} from './profile.styles';

const Profile = () => {
  return (
    <ProfileContainer id='profile'> 
      <Row>
          <Col xl={4} lg={4} md={6}>
            <Fade left>
              <ProfileImageContainer>
                <Image src='https://robohash.org/akbar' alt='profile image' />  
              </ProfileImageContainer>
            </Fade>
          </Col>
        <Col xl={8} lg={8} md={6} className='pt-2'>
          <Container fluid>
            <Row>
              <ProfileTitle>Profile</ProfileTitle>
            </Row>
            <Row>
              <ProfileDesc className='text-justify'>
                Dolor deserunt laboris duis id veniam consequat aliquip et culpa amet eiusmod irure duis. Ad ullamco dolore dolore sunt ullamco ullamco fugiat labore. Adipisicing sunt quis duis nostrud laborum exercitation aute ipsum labore dolor voluptate tempor. Magna voluptate ad culpa irure voluptate velit dolore. Esse excepteur laborum elit sit ipsum. Enim reprehenderit cillum officia elit exercitation culpa magna in pariatur aute dolor commodo esse id. Quis ipsum exercitation consequat sunt.
              </ProfileDesc>
            </Row>
            <IconsContainer>
              <Icon href='https://www.instagram.com/maulanakbrr/' target='_blank'>
                <FaInstagram/>
              </Icon>
              <Icon href='https://twitter.com/livewtme' target='_blank'>
                <FaTwitter/>
              </Icon>
              <Icon href='https://github.com/maulanakbrr' target='_blank'>
                <FaGithub/>
              </Icon>
            </IconsContainer>
          </Container>
        </Col>
      </Row>
    </ProfileContainer>
  );
};

export default Profile;