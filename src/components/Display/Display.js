import React from 'react';

import './styles.css';

function Display(props) {
    var num = props.number;
    var desc = props.description;
    return (
        <div className="percentage">
            <p className="number">{ num }</p>   
            <p className="description">{ desc }</p> 
        </div>
    );
}

export default Display;