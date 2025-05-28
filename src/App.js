import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Navbar from './components/Navbar/Navbar.jsx';
import Landing from './components/Landing/Landing';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import AboutUs from './components/AboutUs/AboutUs';
import Login from './components/Login/Login';
import Landingg from './components/Login/Landing/Landing';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Contactus from './components/ContactUs/ContactUs';
import ProjectDetails from './components/Projects/ProjectDetails/ProjectsDetails';
import PrivateRoute from './components/Routing/PrivateRoute';
import Footer from './components/Home/Footer.jsx';

// Optional extra routes for individual sections (mostly for development or previews)
import Nav from './components/Home/Nav.jsx';
import AI from './components/Home/AI.jsx';
import ExpertiseSection from './components/Home/ExpertiseSection.jsx';
import StatsSection from './components/Home/StatsSection.jsx';
import WhyUsSection from './components/Home/WhyUsSection.jsx';
import DigitalTriumphs from './components/Home/DigitalTriumphs.jsx';
import Heading from "./components/About/Heading.jsx";  
import Whyus from './components/About/Whyus.jsx';
import ExpertiseSolutions from './components/About/ExpertiseSolutions.jsx';
import Experts from './components/About/Experts.jsx';
import Offering from './components/OurService/Offering.jsx';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/projectdetails" element={<ProjectDetails />} />

          {/* Optional section-specific routes */}
          <Route path="/navii" element={<Nav />} />
          <Route path="/homepage" element={<AI />} />
          <Route path="/expertise" element={<ExpertiseSection />} />
          <Route path="/stats" element={<StatsSection />} />
          <Route path="/whyus" element={<WhyUsSection />} />
          <Route path="/card" element={<DigitalTriumphs />} />
          <Route path="/footer" elemment ={<Footer/>}/>
          <Route path="/heading" element={<Heading/>}/>
          <Route path="/why" element={<Whyus/>}/>
          <Route path="/expert" element={<ExpertiseSolutions/>}/>
          <Route path="/team" element={<Experts/>}/>
          <Route path="/offering" element={<Offering/>}/>

          {/* Private route */}
          <Route
            path="/progress"
            element={<PrivateRoute Component={Landingg} />}
          />

          {/* 404 fallback */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
