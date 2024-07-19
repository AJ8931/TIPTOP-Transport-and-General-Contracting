import './App.css';
import ScrollTop from "./components/ScrollTop"
import Main from './layout/Main';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'
import AboutUsPage from './pages/AboutUsPage'
import SpecificCareerPage from './pages/SpecificCareerPage'
import CareersPage from './pages/CareersPage'
import ContactUsPage from './pages/ContactUsPage'
import ProjectPage from './pages/ProjectPage'
import ProfilePage from './pages/ProfilePage'
import TeamPage from './pages/TeamPage'
import WorkRangesPage from './pages/WorkRangesPage'
import ServicesPage from './pages/ServicesPage'
import ErrorPage from './pages/ErrorPage'

function App() {


  return (
      <Main>
        <ScrollTop />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Careers' element={<CareersPage />} />
          <Route path='/SpecificCareer' element={<SpecificCareerPage />} />
          <Route path='/AboutUs' element={<AboutUsPage />} />
          <Route path='/ContactUs' element={<ContactUsPage />} />
          <Route path='/Profile' element={<ProfilePage />} />
          <Route path='/Team' element={<TeamPage />} />
          <Route path='/Project' element={<ProjectPage />} />
          <Route path='/WorkRanges' element={<WorkRangesPage />} />
          <Route path='/Services' element={<ServicesPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Main>
  );
}

export default App;
