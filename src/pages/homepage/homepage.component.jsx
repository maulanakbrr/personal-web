import Profile from '../../components/profile/profile.component';
import Header from '../../components/header/header.component';
import Professional from '../../components/professional/professional.component';
import Work from '../../components/work/work.component';
import Experience from '../../components/experience/experience.component';
import Contact from '../../components/contact/contact.component';

const HomePage = () => {
  
  return (
    <div>
      <Header/>
      <Profile/>
      <Professional/>
      <Work/>
      <Experience/>
      {/* <Contact/> */}
    </div>
  );
};

export default HomePage;