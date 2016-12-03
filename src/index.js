import React from 'react';
import ReactDOM from 'react-dom';
import Collecti from './Collecti';
import './index.css';

var collectables = require('./resources/data1.json');

ReactDOM.render(
  <Collecti collectables={collectables}/>,
  document.getElementById('root')
);
