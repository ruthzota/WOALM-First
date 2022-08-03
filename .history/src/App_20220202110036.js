import React from 'react';
import Navbar from './components/Narbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import RFC from './components/pages/RFC';
import SignUp from './components/pages/SignUp';
import Manfactures from './components/pages/Manfactures';
// import SignIn from './components/pages/SignIn';
import { AuthProvider } from './components/Auth';



import Login from "./Login";
import Register from "./Register";
import Reset from "./Reset";
import Dashboard from "./Dashboard";






class App extends React.Component {
  render() {


  return (
    
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/SignUp'  component={SignUp} />
          <Route path='/SignIn'  component={SignIn} />
          <Route exact path="/Login" component={Login} />
          <Route path='/Manfactures' exact component={Manfactures} />
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



import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Reset from "./Reset";
import Dashboard from "./Dashboard";
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;