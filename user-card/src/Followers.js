import React from "react"

const Cards = props => {


    return (
        <div className={'cards'}>
            <div className={'card'}>
                <h1>Name: {props.name}</h1>
                <img src={props.image}/>
                <p>Bio: {props.bio}</p>
            </div>
        </div>

    );
  };
  
  export default Cards;