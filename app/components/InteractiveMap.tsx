import { Map, Marker } from 'pigeon-maps';

export default function InteractiveMap() {
  return (
    <Map height={450} defaultCenter={[6.59906, 3.335507]} defaultZoom={16}>
      <Marker width={50} anchor={[6.59906, 3.335507]} />
    </Map>
  );
}

// This component renders an interactive map centered at the specified coordinates
