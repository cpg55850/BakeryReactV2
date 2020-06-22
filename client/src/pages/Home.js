import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';
import Showcase from '../components/Showcase';
import Column from '../components/Column';
import Gallery from '../components/Gallery';

function Map() {
	return (
		<GoogleMap
			defaultZoom={10}
			defaultCenter={{ lat: 38.720245, lng: -93.702904 }}
		/>
	);
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

const Home = () => {
	return (
		<>
			<Showcase
				title="Charlie's Bakery"
				desc='A very fancy bakery.'
				img='https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
			/>
			<Column
				title='Map'
				desc='You can find us on Google Maps. Feel free to visit anytime!'
				bg='#335'
			/>
			<WrappedMap
				googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyB3HdC0zuoBDB93L8CW9P-2sHlyawB76N4`}
				loadingElement={<div style={{ height: '500px' }} />}
				containerElement={<div style={{ height: '500px' }} />}
				mapElement={<div style={{ height: '500px' }} />}
			/>
			<Column
				title='Follow Us'
				desc='Follow us on Instagram to see our latest dishes!'
				bg='#925'
			/>
			<Gallery />
		</>
	);
};

export default Home;
