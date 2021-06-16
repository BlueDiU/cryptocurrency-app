import React from 'react';
import './Loader.css';

function Loader() {
  return (
    <>
      <div style={{ height: '100vh' }} className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}

export default Loader;
