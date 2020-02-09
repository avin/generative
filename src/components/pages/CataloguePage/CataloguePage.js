import React from 'react';
import { Link } from 'react-router-dom';
import config from '@/config';

const CataloguePage = () => {
  return (
    <div>
      <ul>
        {config.scenes.map(({ id }) => {
          return (
            <li key={id}>
              <Link to={`/scene/${id}`}>{id}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
CataloguePage.propTypes = {};

export default CataloguePage;
