import React from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import { useSelector } from 'react-redux';

const getMapOptions = (map) => {
  return {
    mapTypeControl: true,
    streetViewControl: true,
    styles: [
      {
        featureType: 'all',
        elementType: 'labels',
        stylers: [
          {
            visibility: 'on',
          },
        ],
      },
      {
        featureType: 'all',
        elementType: 'labels.text.fill',
        stylers: [
          {
            saturation: 36,
          },
          {
            color: '#000000',
          },
          {
            lightness: 40,
          },
        ],
      },
      {
        featureType: 'all',
        elementType: 'labels.text.stroke',
        stylers: [
          {
            visibility: 'on',
          },
          {
            color: '#000000',
          },
          {
            lightness: 16,
          },
        ],
      },
      {
        featureType: 'all',
        elementType: 'labels.icon',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'administrative',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: '#000000',
          },
          {
            lightness: 20,
          },
        ],
      },
      {
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        stylers: [
          {
            color: '#000000',
          },
          {
            lightness: 17,
          },
          {
            weight: 1.2,
          },
        ],
      },
      {
        featureType: 'administrative.country',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#e5c163',
          },
        ],
      },
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#c4c4c4',
          },
        ],
      },
      {
        featureType: 'administrative.neighborhood',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#e5c163',
          },
        ],
      },
      {
        featureType: 'landscape',
        elementType: 'geometry',
        stylers: [
          {
            color: '#000000',
          },
          {
            lightness: 20,
          },
        ],
      },
      {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [
          {
            color: '#000000',
          },
          {
            lightness: 21,
          },
          {
            visibility: 'on',
          },
        ],
      },
      {
        featureType: 'poi.business',
        elementType: 'geometry',
        stylers: [
          {
            visibility: 'on',
          },
        ],
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: '#e5c163',
          },
          {
            lightness: '0',
          },
        ],
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#ffffff',
          },
        ],
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.stroke',
        stylers: [
          {
            color: '#e5c163',
          },
        ],
      },
      {
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [
          {
            color: '#000000',
          },
          {
            lightness: 18,
          },
        ],
      },
      {
        featureType: 'road.arterial',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: '#575757',
          },
        ],
      },
      {
        featureType: 'road.arterial',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#ffffff',
          },
        ],
      },
      {
        featureType: 'road.arterial',
        elementType: 'labels.text.stroke',
        stylers: [
          {
            color: '#2c2c2c',
          },
        ],
      },
      {
        featureType: 'road.local',
        elementType: 'geometry',
        stylers: [
          {
            color: '#000000',
          },
          {
            lightness: 16,
          },
        ],
      },
      {
        featureType: 'road.local',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#999999',
          },
        ],
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [
          {
            color: '#000000',
          },
          {
            lightness: 19,
          },
        ],
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [
          {
            color: '#000000',
          },
          {
            lightness: 17,
          },
        ],
      },
    ],
  };
};
const api_key = process.env.REACT_APP_API_KEY;
const Map = ({ center, zoom }) => {
  const posts = useSelector((state) => state.posts);
  const markers = posts.map((ev, index) => {
    const lat = parseFloat(ev.latitude);
    const lng = parseFloat(ev.longitude);
    return <LocationMarker key={index} lat={lat} lng={lng} />;
  });
  return (
    <div className='map' style={{ height: '60vh', width: '90vw' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: api_key }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        options={getMapOptions}
      >
        {markers}
      </GoogleMapReact>
    </div>
  );
};
const defaultProps = {
  center: {
    lat: 45.3265,
    lng: -122.8756,
  },
  zoom: 10,
};

export default Map;
