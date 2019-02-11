import React from 'react';

const Child = (props) => (
    <div>
        <h3>Name: {props.match.params.name}</h3>
        {props.data}
    </div>
);


export default Child;
