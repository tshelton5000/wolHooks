import React, { useState, useEffect } from 'react';
import Sitebar from './components/Navbar';
import Auth from './components/Auth/Auth';
import WorkoutIndex from './components/Workouts/WorkoutIndex';
import './App.css';

const App = () =>  {
  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  return (
    <div>
      <Sitebar clearToken={clearToken}/>
      {sessionToken == localStorage.getItem('token') ? <WorkoutIndex token={sessionToken}/>
        : <Auth updateToken={updateToken}/>}
    </div>
  );
}

export default App;
