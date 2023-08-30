import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then(data => setJsonData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {jsonData !== null && (
          <pre id="disjson">{JSON.stringify(jsonData, null, 2)}</pre>
        )}
      </header>
    </div>
  );
}

export default App;
