import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Fragment, useState } from 'react';
import PrivateRoute from './components/Routing/PrivateRoute';
import Landing from './components/Landing/Landing';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import AboutUs from './components/AboutUs/AboutUs';
import Login from './components/Login/Login';
import Landingg from './components/Login/Landing/Landing';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Contactus from './components/ContactUs/ContactUs';
import ProjectDetails from './components/Projects/ProjectDetails/ProjectsDetails';


function App() {

  return (
    <Provider store={store}>
      <Router>
        <Fragment className="App">
          <Navbar />
          <Routes>
            <Route exact path="/" Component={Landing} />
            <Route exact path="/services" Component={Services} />
            <Route exact path="/projects" Component={ErrorPage} />
            <Route exact path="/aboutus" Component={ErrorPage} />
            <Route exact path="/login" Component={Login} />
            <Route exact path="/contactus" Component={Contactus} />
            <Route exact path="/projectdetails" Component={ErrorPage} />
            <Route exact path="*" Component={ErrorPage} />
            <Route
              exact
              path="/progress"
              element={<PrivateRoute Component={Landingg} />}
            />
          </Routes>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;