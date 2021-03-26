import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
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
              Recent bachelor's degree recipient with a background in information technology. Over 2 years of experience working on freelance web developer and skilled in HTML, CSS and JavaScript. I have a good adaptability that makes me can live in new surrounding. I like to learn something new and I'm also a fast learner. Currently still honing my skills and getting deeper with MERN stack. I love to meet new people and know each other. If your hobby is playing guitar, I think we can make a band together. 
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
              <Icon href='https://github.com/maulanakbrr' target='_blank'>
                <FaLinkedin/>
              </Icon>
            </IconsContainer>
          </Container>
        </Col>
      </Row>
    </ProfileContainer>
  );
};

export default Profile;