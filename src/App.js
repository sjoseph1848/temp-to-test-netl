import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');
  const fetchData = async () => {
    const results = await axios.get('/.netlify/functions/helloWorld');
    setMessage(results.data.message);
    console.log(results.data.message);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className='App'>
      <header className='App-header'>
        <h3>{message}</h3>
      </header>
    </div>
  );
}

export default App;
