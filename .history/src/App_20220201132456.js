import React from 'react';
import Navbar from './components/Narbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import RFC from './components/pages/RFC';
import SignUp from './components/pages/SignUp';
import Manfactures from './components/pages/Manfactures';


class App extends React.Component {
  render() {


  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/RFC' component={RFC} />
          <Route path='./components/pages/' component={SignUp} />
          <Route path='/manfactures' component={Manfactures} />
          <Route path="/" exact component={Home} />
        </Switch>
        <Footer />
        
      </Router>
    </>
  );
}
}

export default App;