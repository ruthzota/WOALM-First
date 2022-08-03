import React from 'react';
import Navbar from './components/Narbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import RFC from './components/pages/RFC';
// import SignUp from './components/pages/SignUp';
import Manfactures from './components/pages/Manfactures';
// import SignIn from './components/pages/SignIn';
import { AuthProvider } from './components/Auth';



import Login from "./Login";
import Register from "./Register";
import Reset from "./Reset";
import Dashboard from "./Dashboard";


// <Route path='/SignUp'  component={SignUp} />
// <Route path='/SignIn'  component={SignIn} />



class App extends React.Component {
  render() {


  return (
    
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />

          <Route exact path="/Login" component={Login} />
          <Route path='/Manfactures' exact component={Manfactures} />
          <Route exact path="/Re" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
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




