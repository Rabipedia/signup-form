import logo from './logo.svg';
import './App.css';
import SignupForm from './components/signup-form';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <SignupForm/>
      </div>
    );
  }
 
}

export default App;
