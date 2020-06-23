import React from 'react';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';

import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

import { Provider } from 'react-redux';
import store from './store';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';

const App = () => {
	return (
		<Router>
			<Provider store={store}>
				<Navbar />
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route exact path='/about'>
						<About />
					</Route>
					<Route exact path='/news'>
						<News />
					</Route>
					<Route exact path='/contact'>
						<Contact />
					</Route>
					<Route exact path='/menu'>
						<Menu />
					</Route>
					<Route exact path='/login'>
						<Login />
					</Route>
					<Route exact path='/register'>
						<Register />
					</Route>
				</Switch>
				<Footer />
			</Provider>
			<GlobalStyle />
		</Router>
	);
};

export default App;
