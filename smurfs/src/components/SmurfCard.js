import React from 'react';

const SmurfCard = props => {
    return (
        <div>
            <h2>{props.smurf.name}</h2>
            <p>Il a {props.smurf.age} ans</p>
            <p>Il mesure {props.smurf.height} de haut</p>
        </div>
    )
};

export default SmurfCard;