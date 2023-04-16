import React from 'react';
import { GoPrimitiveDot } from 'react-icons/go';
import './Map.css';

const LocationMarker = ({ onClick }) => {
  return (
    <div className='location-marker' onClick={onClick}>
      <GoPrimitiveDot />
    </div>
  );
};

export default LocationMarker;
