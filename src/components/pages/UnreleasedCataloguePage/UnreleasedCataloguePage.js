import React from 'react';
import { Link } from 'react-router-dom';
import config from '@/config';

const scenes = config.unreleasedScenes.reverse();

const UnreleasedCataloguePage = () => {
  return (
    <div>
      <ul>
        {scenes.map(({ id }) => (
          <li>
            <Link to={`/u/${id}`} key={id}>
              {id}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
UnreleasedCataloguePage.propTypes = {};

export default UnreleasedCataloguePage;
