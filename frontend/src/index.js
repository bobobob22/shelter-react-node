import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Myy Minimal React Webpack Bsadsadsabeal Setup';

ReactDOM.render(
    <div>{title}</div>,
    document.getElementById('app')
);

module.hot.accept();
