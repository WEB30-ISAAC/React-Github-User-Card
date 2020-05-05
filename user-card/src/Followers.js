import React from "react"
// import './Followers.css'

// const followersArray = ['https://api.github.com/users/MMGroesbeck', 'https://api.github.com/users/shayne-smith', 'https://api.github.com/users/toendthepeace', 'https://api.github.com/users/ScottSmith23', 'https://api.github.com/users/mmussel', 'https://api.github.com/users/frankie95667', 'https://api.github.com/users/sadamexx', 'https://api.github.com/users/biskoi', 'https://api.github.com/users/cdifranco1', 'https://api.github.com/users/justinruss24', 'https://api.github.com/users/MelodyRackham'];


// followersArray.forEach(item => {
//     axios.get(item)
//     .then(response => {
//       console.log(response.data)
//       entryPoint.append(gitFriends(response.data));
//     })
//     .catch(error => {
//       console.log("the data was not returned", error)
//     });
// });

// export default function TheForce({force, setPod}) {

// useEffect(() => {
//     axios
//     .get(`https://swapi.py4e.com/api/people/`)
//     .then(response => {
//         console.log(response);
//         setPod(response.data.results);
//     })
//     .catch(error => {
//         console.log("Sorry no star wars", error);
//     });
// }, []);

// return (
//     <Page>
//     <Col  xs="6" md="4" xl="3">
//     {force.map(people => {
//             return (<Cards key={people.id} name={people.name} gender={people.gender} height={people.height} mass={people.mass} eye_color={people.eye_color} birth_year={people.birth_year} />);
//         })}
//     </Col>  
//     </Page>   
// );
// }

const Cards = props => {


    return (
        <div className={'cards'}>
            <div className={'card'}>
                <p>id{props.key}</p>
                <p>Name: {props.name}</p>
                <p>Bio: {props.bio}</p>
            </div>
        </div>

    );
  };
  
  export default Cards;