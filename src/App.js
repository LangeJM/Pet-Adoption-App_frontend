import React from 'react'
import logo from './images/I-PetsLogo.png';
import './App.css';

import Header from './components/Header'
import SignInModal from './components/SignInModal'
import SignUpModal from './components/SignUpModal'
import Homepage from './components/Homepage';
import PetsPage from './components/PetsPage'
import SearchPage from './components/SearchPage'
import ProfilePage from './components/ProfilePage'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      firstName: '',
      lastName: '',
      isAdmin: '',
      
      signInModalIsOpen: false,
      signUpModalIsOpen: false,


    }
  
  
  }

  componentDidMount() {
    this.setState({ firstName: "Achim", lastName: "Kugel", isAdmin: true, isLoggedIn: false })
    console.log(this.state.signInModalIsOpen)
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
    const { isLoggedIn, firstName, lastName, isAdmin, signInModalIsOpen, signUpModalIsOpen } = this.state;
    const headerVar = <Header
      isLoggedIn={isLoggedIn}
      firstName={firstName}
      lastName={lastName}
      isAdmin={isAdmin}
      onLogIn={(event) => this.handleLogin(event)}
      onSignUp={(event) => this.handleSignUp(event)}
    />
    return(
      <Router>
        <Switch>
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
                <h1>Admin Page</h1>
              </Route>
              <Route path="/profile">
                <ProfilePage/>
                    
              </Route>
              <Route path="/search">
                <SearchPage/>
                    
              </Route>
              <Route path="/pets">
                <PetsPage />
                   
              </Route>
              <Route exact path="/">
                    <Homepage        
                    />
              </Route>      
            </div>
          </div>
        </Switch>
      </Router>
      
  );
  }
  
}

export default App;
