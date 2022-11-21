import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import * as AWS from 'aws-sdk'; 

const configuration = {
    region: 'us-east-1',
    secretAccessKey: '5yqUwE4vA1JvtvAXbmfw2EjfBqyt2EVdRhTj4qQZ',
    accessKeyId: 'AKIAYC3FHFKDJZVCJWIW'
}

AWS.config.update(configuration);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
