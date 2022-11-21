import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import * as AWS from 'aws-sdk'; 

const configuration = {
    region: 'us-east-1',
    secretAccessKey: process.env.REACT_APP_AWS_KEY,
    accessKeyId: process.env.REACT_APP_SECRET_AWS_KEY
}

AWS.config.update(configuration);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
