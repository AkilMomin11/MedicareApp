import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import DoctorsPage from './components/DoctorsPage';
import SocialPage from './components/SocialPage';
import ResourcesPage from './components/ResourcesPage';
import Footer from './components/Footer';
import YogaPage from './components/YogaPage';



const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/doctors" component={DoctorsPage} />
        <Route path="/social" component={SocialPage} />
        <Route path="/resources" component={ResourcesPage} />
        <Route path="/yoga" component={YogaPage} />
        
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
