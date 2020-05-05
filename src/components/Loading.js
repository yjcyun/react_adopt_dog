import React from 'react';
import loadingGif from '../images/loading.gif';

const Loading = () => {
  return (
    <div className="loading">
      <img src={loadingGif} alt="loading gif"/>
    </div>
  )
}

export default Loading;
