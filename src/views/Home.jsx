import React from 'react';
import { useContext } from 'react';
import { Context } from '../js/store/appContext';

const Home = () => {
    const {store, actons} = useContext(Context)
  return (
    <div>Home
        <h5>personas en el estado global: {store.personas}</h5>
    </div>
  )
}

export default Home