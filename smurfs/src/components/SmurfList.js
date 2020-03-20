import React, { useContext } from 'react';
import SmurfContext from '../contexts/SmurfContext';

import SmurfCard from './SmurfCard';

const SmurfList = () => {

    const smurfs = useContext(SmurfContext);

    return (
        <div>
            {smurfs.map(smf => (
                <SmurfCard
                key={smf.id}
                smurf={smf} />
            ))}
        </div>
    )
}

export default SmurfList;