import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

export class NavbarLinks extends Component {
	render() {
		return (
			<React.Fragment>
				<div id='myMobileLinks'>
					<ul className='navUl'>
						<li>
							<Link to='/' onClick={this.props.handleClick}>
								Home
							</Link>
						</li>
						<li>
							<Link
								to='../About'
								onClick={this.props.handleClick}
							>
								About
							</Link>
						</li>
						<li>
							<Link to='../Menu' onClick={this.props.handleClick}>
								Menu
							</Link>
						</li>
						<li>
							<Link
								to='../Contact'
								onClick={this.props.handleClick}
							>
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</React.Fragment>
		);
	}
}

export default NavbarLinks;
