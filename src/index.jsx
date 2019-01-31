import React from 'react';
import ReactDom from 'react-dom';

import Web3 from 'web3';
import TruffleContract from 'truffle-contract';

import App from './app.jsx';

ReactDom.render(
  <App />,
  document.getElementById('root')
)