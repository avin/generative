import React from 'react';
import Spinner from './Spinner';

export default () => (
  <div>
    <Spinner />
    <hr />
    <Spinner size={20} />
    <hr />
    <Spinner size={100} />
  </div>
);
