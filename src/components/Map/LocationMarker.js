import React from 'react';
import { GoPrimitiveDot } from 'react-icons/go';
import './Map.css';

const LocationMarker = ({ lng, lat }) => {
  return (
    <div className='location-marker'>
      <GoPrimitiveDot />
    </div>
  );
};

export default LocationMarker;
