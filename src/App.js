import React from 'react'
import './App.css';

import Header from './components/Header'
import SignInModal from './components/SignInModal'
import SignUpModal from './components/SignUpModal'
import Homepage from './components/Homepage';
import PetsPage from './components/PetsPage'
import SearchPage from './components/SearchPage'
import ProfilePage from './components/ProfilePage'
import AdminPage from './components/AdminPage'
import {getCurrentUserApi} from './apis/apis'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Cookies from 'js-cookie';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInModalIsOpen: false,
      signUpModalIsOpen: false,
      cookie: {
        sessionId: Cookies.get("I-Pets")
      },
      userObject: {
      }

    }
  }

  componentDidMount() {
    const sessionId = this.state.cookie
    getCurrentUserApi(sessionId)
      .then((res) => {
        this.setState({userObject: res.data})
      })
        .catch((err) => {
            console.log(err)
        })
    
  }
  
  handleLogin(event) {
    event.preventDefault()
    if (this.state.signInModalIsOpen) {
      this.setState({ signInModalIsOpen: false });
    } else {
      this.setState({ signInModalIsOpen: true });
    } 
  };

  handleSignUp(event) {
    event.preventDefault()
    if (this.state.signUpModalIsOpen) {
      this.setState({ signUpModalIsOpen: false });
    } else {
      this.setState({ signUpModalIsOpen: true });
    } 
  }

  render() {
    const { userObject,signInModalIsOpen, signUpModalIsOpen } = this.state;
    const headerVar = <Header
      isLoggedIn={!!userObject.email}
      
      firstName={userObject.firstName}
      lastName={userObject.lastName}
      isAdmin={userObject.isAdmin}
      onLogIn={(event) => this.handleLogin(event)}
      onSignUp={(event) => this.handleSignUp(event)}
    />
    return(
      <Router>
        <Switch>
          <React.Fragment>
          <div className=' w-100 d-flex justify-content-center'>
            <div className="App w-75">
              {headerVar}
              <SignInModal
                signInModalIsOpen={signInModalIsOpen}
                onLogIn={(event) => this.handleLogin(event)}
              />
              <SignUpModal
                signUpModalIsOpen={signUpModalIsOpen}
                onSignUp={(event) => this.handleSignUp(event)}
                />
              <Route path="/admin">
                <AdminPage userObject={this.state.userObject}/>
              </Route>
              <Route path="/profile">
                <ProfilePage userObject={this.state.userObject}/>
                    
              </Route>
              <Route path="/search">
                <SearchPage userObject={this.state.userObject}/>
                    
              </Route>
              <Route path="/pets">
                <PetsPage userObject={this.state.userObject}/>
                   
              </Route>
              <Route exact path="/">
                    <Homepage userObject={this.state.userObject} />
              </Route>      
            </div>
            </div>
            </React.Fragment>
        </Switch>
      </Router>
      
    );
  }
}

export default App;
