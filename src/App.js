import CustomNavbar from './components/custom-navbar/custom-navbar.component';
import CustomFooter from './components/custom-footer/custom-footer.component';

import HomePage from './pages/homepage/homepage.component';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <CustomNavbar/>
      <HomePage/>
      <CustomFooter/>
    </div>
  );
}

export default App;
