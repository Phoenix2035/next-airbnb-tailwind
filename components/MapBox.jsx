import { useState, useMemo } from "react"
import Map, { Marker, Popup } from 'react-map-gl'
import getCenter from "geolib/es/getCenter"

const MapBox = ({ searchResults }) => {
    const [selectedLocation, setSelectedLocation] = useState({})

    const coordinates = searchResults.map(item => ({
        latitude: item.lat,
        longitude: item.long
    }))

    const center = getCenter(coordinates)

    const [viewState, setViewState] = useState({
        width: "100%",
        height: "100%",
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11
    })

    const markers = useMemo(() => searchResults.map(result => {
        <div key={result.long}>
            <Marker
                longitude={result.long}
                latitude={result.lat}
            >
                <p className="cursor-pointer text-2xl animate-bounce" onClick={() => setSelectedLocation(result)}>📌</p>
            </Marker>

            {
                selectedLocation.long === result.long ? <Popup closeOnClick={true} onClose={() => setSelectedLocation({})} latitude={result.lat} longitude={result.long}>{result.title}</Popup> : false
            }
        </div>
    }), [searchResults])


    return (
        <Map
            mapStyle="mapbox://styles/masturdating/ckzu4j4vc00ta14rwpeo7e7bo"
            mapboxAccessToken={process.env.mapbox_key}
            initialViewState={{ ...viewState }}
            onMove={evt => setViewState(evt.viewState)}
        >
            {markers}
        </Map>
    )
}

export default MapBox


