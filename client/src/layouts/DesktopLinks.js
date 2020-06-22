import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export class DesktopLinks extends Component {
	render() {
		const element = <FontAwesomeIcon icon={faBars} />;
		return (
			<div>
				<ul className='navUl'>
					<li className='menuBtn' onClick={this.props.handleClick}>
						<a>{element}</a>
					</li>
					<div id='myLinks'>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='../About'>About</Link>
						</li>
						<li>
							<Link to='../Menu'>Menu</Link>
						</li>
						<li>
							<Link to='../Contact'>Contact</Link>
						</li>
					</div>
				</ul>
			</div>
		);
	}
}

export default DesktopLinks;
