import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');
  const fetchData = async () => {
    const config = {
      headers: {
        Accept: 'application/json',
      },
    };
    const results = await fetch(`/.netlify/functions/helloWorld`, config);

    const data = await results.json();

    console.log(data[0].author);
    setMessage(data[0].description);
    // const results = await axios.get('/.netlify/functions/helloWorld');
    // setMessage(results.data.message);
    // console.log(results.data.message);
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
