import React from 'react';
import {fetchData} from './AWS_Functions';

function App() {

  const fetchDataFormDynamoDb = () => {
    fetchData('coding_table');
  }

  return (
    <div className="App">
      Basil's first AWS APP
      <button onClick={() => fetchDataFormDynamoDb()}> Fetch </button>
    </div>
  );
}

export default App;
