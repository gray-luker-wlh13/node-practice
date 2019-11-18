import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      users: []
    }
  }

  render(){
    const users = this.state.users.map(user => <h2>{user.name}</h2>)
    return (
      <div className="App">
        {users}
      </div>
    );
  }
}

export default App;
