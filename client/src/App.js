import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Landing from './components/landing/Landing';
import Home from './components/home/Home';
import About from './components/about/About';
import Login from './components/authentication/Login/Login';
import Register from './components/authentication/register/Register';
import Dashboard from './components/dashboard/Dashboard';

// Redux
import store from './store';
import { Provider } from 'react-redux';

// Layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Common
import PrivateRoute from './components/common/privateRoute';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Router>
              <div className='container-fluid'>
                <Navbar />
                <Route exact path='/home' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={Register} />

                <Switch>
                  <PrivateRoute exact path='/dashboard' component={Dashboard} />
                </Switch>
                
                <Footer />
              </div>
            </Router>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
