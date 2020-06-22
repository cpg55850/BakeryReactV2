import React from 'react';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';

import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
import Contact from './pages/Contact';
import Menu from './pages/Menu';

import { Provider } from 'react-redux';
import store from './store';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
	return (
		<Router>
			<Provider store={store}>
				<div>
					<Navbar />
					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route exact path='/About'>
							<About />
						</Route>
						<Route exact path='/News'>
							<News />
						</Route>
						<Route exact path='/Contact'>
							<Contact />
						</Route>
						<Route exact path='/Menu'>
							<Menu />
						</Route>
					</Switch>
					<Footer />
				</div>
			</Provider>
		</Router>
	);
};

export default App;
