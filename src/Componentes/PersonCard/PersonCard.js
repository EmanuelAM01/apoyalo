import React, {Component} from "react";
import App from "../../App";


class PersonCard extends Component{
    render(){
        const { firstName, lastName, age, hairColor } = this.props;
        return(
            <>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
            </>
        )
    }
}

export default PersonCard;