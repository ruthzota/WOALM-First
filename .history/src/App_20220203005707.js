import React from 'react';
import Navbar from './components/Narbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import RFC from './components/pages/RFC';
import Manfactures from './components/pages/Manfactures';
import Login from './components/pages/Login';
import Register from './components/pages/Register';



class App extends React.Component {
  render() {
  return (
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/RFC' exact component={RFC} />
          <Route path='/Register'  component={Register} />
          <Route path='/Login'  component={Login} />
          <Route path='/Manfactures' exact component={Manfactures} />
          <Route path
       
         
          
        </Switch>
        <Footer />
      </Router>
    
  );
}
}

export default App;




