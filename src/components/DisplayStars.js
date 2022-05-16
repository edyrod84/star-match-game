import React from 'react';
import utils from './utils';

const DisplayStars = ({ stars }) => {
    return (
      <>
        {utils.range(1, stars).map(starId => 
              <div key={starId} className="star"/>
        )}
      </>
    )
}
  export default DisplayStars