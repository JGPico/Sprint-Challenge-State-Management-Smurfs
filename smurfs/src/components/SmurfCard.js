import React from 'react';

const SmurfCard = props => {
    return (
        <div>
            <h2>{props.smurf.name}</h2>
            <p>{props.smurf.age} years old</p>
            <p>{props.smurf.height} tall</p>
        </div>
    )
};

export default SmurfCard;