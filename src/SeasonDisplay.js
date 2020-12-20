import React from 'react';
import './seasonDisplay.css'

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return  lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = ({lat}) => {
    const season = getSeason(lat, new Date().getMonth())

    return (
        <div className={`${season} bg`}>
            <p>{season === "summer" ? "Let's go to the beach!" : "Brrrr, it is very cold today!"}</p>
        </div>
    )
}

export default SeasonDisplay;