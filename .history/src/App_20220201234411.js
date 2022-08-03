import React from 'react';
import Navbar from './components/Narbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import RFC from './components/pages/RFC';
import SignUp from './components/SignUp';
import Manfactures from './components/pages/Manfactures';
import SignIn from './components/SignIn';
import { AuthProvider } from './components/Auth';



class App extends React.Component {
  render() {


  return (
    
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='./SignUp' exact component={SignUp} />
          <Route path='./SignIn' exact component={SignIn} />
          <Route path='./Manfactures' exact component={Manfactures} />
          <AuthProvider>
          <Route path='/RFC' exact component={RFC} />
          </AuthProvider>
          
        </Switch>
        <Footer />
      </Router>
    
  );
}
}

export default App;