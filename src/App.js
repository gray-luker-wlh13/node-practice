import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      users: [],
      currentUserId: 1
    }
  }

  componentDidMount(){
    axios.get(`http://localhost:4040/api/users/${this.state.currentUserId}`).then(res => {
      this.setState({
        users: res.data
      })
    })
  }

  render(){
    console.log('this.state', this.state)
    const users = this.state.users.map(user => <h2>{user.first_name}</h2>)
    return (
      <div className="App">
        {users}
      </div>
    );
  }
}

export default App;
