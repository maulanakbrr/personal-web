import { lazy, Suspense } from 'react';

import CustomNavbar from './components/custom-navbar/custom-navbar.component';
import CustomFooter from './components/custom-footer/custom-footer.component';

import ErrorBoundary from './components/error-boundary/error-boundary.component';
import Spinner from './components/spinner/spinner.component';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));

const App = () => {
  return (
    <div className="App">
      <CustomNavbar/>
      <ErrorBoundary>
        <Suspense fallback={<Spinner/>}>
          <HomePage/>
        </Suspense>
      </ErrorBoundary>
      <CustomFooter/>
    </div>
  );
}

export default App;
