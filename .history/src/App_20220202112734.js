import React from 'react';
import Navbar from './components/Narbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import RFC from './components/pages/RFC';
// import SignUp from './components/pages/SignUp';
import Manfactures from './components/pages/Manfactures';
// import SignIn from './components/pages/SignIn';
import { AuthProvider } from './components/Auth';



import Login from "./components/Login";
import Register from "./components/registration";
import Reset from "./components/Reset";
import Dashboard from "./components/Dashboard";


// <Route path='/SignUp'  component={SignUp} />
// <Route path='/SignIn'  component={SignIn} />



class App extends React.Component {
  render() {


  return (
    
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact component={Home} />

          <Route path='/RFC' exact component={RFC} />
          <Route path='/SignUp'  component={Sig} />
          <Route path='/SignIn'  component={SignIn} />
          <AuthProvider>
          
          <Route path='/Manfactures' exact component={Manfactures} />
          </AuthProvider>
          
        </Routes>
        <Footer />
      </Router>
    
  );
}
}

export default App;




