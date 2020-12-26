import {
  HeaderContainer, HeaderImage, HeaderCaption, Title, Info, DownButton
} from './header.styles';

const Header = () => {
  return(
    <HeaderContainer id='header'>
      <HeaderImage style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/profile-2.jpg'})`}}/>
      <HeaderCaption>
        <Title>
          Maulana Akbar
        </Title>
        <Info>Web Developer and Full Stack JS</Info>
        <a href="#profile">
          <DownButton/>
        </a>
        
      </HeaderCaption>
    </HeaderContainer>
    
  )
};

export default Header;