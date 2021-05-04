import React from 'react';
import {Link} from 'react-router-dom';

function TripListItem({trip}) { 
  return (
    <div>
      <div>
        <h3>{trip.name}</h3>
      </div>
      <div>
        <Link
          to={{
            pathname: '/details',
            state: {trip}
          }}
        >
          DETAILS
        </Link>
        <Link
          to={{
            pathname: '/edit',
            state: {trip}
          }}
        >
          EDIT
        </Link>
        <button>
          DELETE
        </button>
      </div>
    </div>
  );
}

export default TripListItem;