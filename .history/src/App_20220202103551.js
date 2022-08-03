import React from 'react';
import Navbar from './components/Narbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import RFC from './components/pages/RFC';
import SignUp from './components/pages/SignUp';
import Manfactures from './components/pages/Manfactures';
import SignIn from './components/pages/SignIn';
import { AuthProvider } from './components/Auth';


class App extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };
  
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }
  
  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    
    return body;
  };
  
  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();
    
    this.setState({ responseToPost: body });
  };
  












class App extends React.Component {
  render() {


  return (
    
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/SignUp'  component={SignUp} />
          <Route path='/SignIn'  component={SignIn} />
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