import React from 'react';
import videoBg from '../assets/bg_short.mp4';

const Main = () => {
  return (
    <div className='main'>
      <div className='overlay'></div>
      <video src={videoBg} autoPlay loop muted />
      <div className='content'>
        <h1>Strange Crew</h1>
        <p>Stuff</p>
      </div>
    </div>
  )
}

export default Main;