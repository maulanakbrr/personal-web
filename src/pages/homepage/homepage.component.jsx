import Profile from '../../components/profile/profile.component';
import Header from '../../components/header/header.component';
import Professional from '../../components/professional/professional.component';
import Work from '../../components/work/work.component';

import {
  HomePageContainer
} from './homepage.styles';

const HomePage = () => {
  return (
    <HomePageContainer>
      <Header/>
      <Profile/>
      <Professional/>
      <Work/>
    </HomePageContainer>
  );
};

export default HomePage;