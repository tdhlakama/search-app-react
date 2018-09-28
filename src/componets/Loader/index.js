import React from 'react';
import loaderSrc from '../../assets/loader.gif'
const Loader = (props) => (
  <div>
    <img
      style={{ width: 75, lineHeight: 50 }}
      alt="Loader Icons"
      src={loaderSrc} />
  </div>
);


export default Loader;