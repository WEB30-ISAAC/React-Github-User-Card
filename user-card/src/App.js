import React from "react";
import axios from "axios";
import Followers from './Followers'

const followersArray = ['https://api.github.com/users/teaguehannam', 'https://api.github.com/users/MMGroesbeck', 'https://api.github.com/users/shayne-smith', 'https://api.github.com/users/ScottSmith23', 'https://api.github.com/users/mmussel', 'https://api.github.com/users/frankie95667', 'https://api.github.com/users/sadamexx', 'https://api.github.com/users/biskoi', 'https://api.github.com/users/cdifranco1', 'https://api.github.com/users/justinruss24', 'https://api.github.com/users/MelodyRackham'];

const urlName = "Istott"
const url = `https://cors-anywhere.herokuapp.com/https://api.github.com/users/${urlName}`

export default class App extends React.Component {
  state = {
    profile: [],
    followers: []
  };
  

  componentDidMount() {
    axios
      .get(url, { crossdomain: true})
      .then(res => {
        console.log(res)
        this.setState({ profile: res.data});
      })
      .catch(err => console.log(err));

    followersArray.forEach(item => {
      axios.get(`https://cors-anywhere.herokuapp.com/${item}`)
      .then(response => {
        console.log(response.data)
        this.setState({followers: [...this.state.followers, response.data]})
      })
      .catch(error => {
        console.log("the data was not returned", error)
      });
    });
  }

  render() {
    return (
      <div className="App">
        <div className='cards'>
          <div className='card'>
            <h1>Name: {this.state.profile.name} </h1>
            <h3>Bio: {this.state.profile.bio}</h3>
          </div>

          <div className={'title'}><p>Followers</p></div>
          <div className='followers'>
            {this.state.followers.map(people => {
              return (<Followers key={people.id} name={people.name} bio={people.bio}/>);
            })}
          </div>
        </div>

      </div>
    );
  }
}

