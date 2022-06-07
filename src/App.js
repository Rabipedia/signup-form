import logo from './logo.svg';
import './App.css';
import SignupForm from './components/signup-form';
import React from 'react';

class App extends React.Component {
  state = {
    users: []
  };

  createUser = user => {
    user.id = new Date().getDate().toString();
    this.setState({
      users: [...this.state.users, user]
    })
  };

  render() {
    return (
      <div>
        <SignupForm createUser={this.createUser}/>

        <div>
          <h3 className='my-5'>All Registered Useres</h3>
          <ul className='list-group'>
              {
                this.state.users.map( user => (
                  <li key={user.id} className='list-group-item'>{user.name} -- {user.email}</li>
                ))
              }
          </ul>
        </div>
      </div>
    );
  }
 
}

export default App;
