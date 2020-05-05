import React from "react";
import axios from "axios";
import Followers from './Followers'

const followersArray = ['https://api.github.com/users/MMGroesbeck', 'https://api.github.com/users/shayne-smith', 'https://api.github.com/users/toendthepeace', 'https://api.github.com/users/ScottSmith23', 'https://api.github.com/users/mmussel', 'https://api.github.com/users/frankie95667', 'https://api.github.com/users/sadamexx', 'https://api.github.com/users/biskoi', 'https://api.github.com/users/cdifranco1', 'https://api.github.com/users/justinruss24', 'https://api.github.com/users/MelodyRackham'];


export default class App extends React.Component {
  state = {
    profile: [],
    profileName: ''
  };
  

  componentDidMount() {
    // const entryPoint = document.querySelector('.cards');

    axios
      .get("https://api.github.com/users/Istott")
      .then(res => {
        console.log(res)
        this.setState({ profile: res.data});
      })
      .catch(err => console.log(err));

    followersArray.forEach(item => {
      axios.get(item)
      .then(response => {
        console.log(response.data)
        this.setState={profileName: response.data.name}
      })
      .catch(error => {
        console.log("the data was not returned", error)
      });
    });

    // axios
    //   .get(followersArray)
    //   .then(response => {
    //     console.log(response.data)
    //     followersArray.forEach(item => {
    //       this.setState={profileName: response.data.name}
    //     })
    //   })
      // .catch(error => {
      //   console.log("the data was not returned", error)
      // });
    // };
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
          <div className='card'>
            {followersArray.map(people => {
              return (<Followers key={people.id} name={people.name} bio={people.bio}/>);
            })}
          </div>
        </div>

      </div>
    );
  }
}

