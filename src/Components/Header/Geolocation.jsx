import React from 'react'
import Geolocation from 'react-geolocation'

import axios from 'axios'

const DaDataFetcher = axios.create({
  baseURL: 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/',
  headers: {
    Authorization: 'Token 756ac9a9c9cc5780ab69cb82ec4d6d155bd56f6f',
  },
})

const Address = ({latitude, longitude}) => {
  const [address, setAddress] = React.useState('')

  const handleAddress = (latitude, longitude) => {
    DaDataFetcher.post(
      'address',
      {
        'lat': latitude,
        'lon': longitude,
      },
    )
    .then((response) => {
      setAddress(response.data.suggestions[0].value)
    })
  }

  React.useEffect(() => handleAddress(latitude, longitude), [])

  return <p style={{fontSize: '10px'}}>{address}</p>
}

export default () => {

  return (
    <Geolocation
      render={({
        fetchingPosition,
        position: { coords: { latitude, longitude } = {} } = {},
        error,
        getCurrentPosition,
      }) =>
        <>

          {error && <>{error.message}</>}

          {(latitude && longitude) ?
            <Address latitude={latitude} longitude={longitude}/>
            :
            <button onClick={getCurrentPosition}>Get Your Position</button>
          }
        </>
      }
    />
  )
}
