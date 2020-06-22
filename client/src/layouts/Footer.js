import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebook,
	faTwitter,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import './Footer.css';

const Footer = () => {
	const facebookIcon = <FontAwesomeIcon icon={faFacebook} />;
	const twitterIcon = <FontAwesomeIcon icon={faTwitter} />;
	const instagramIcon = <FontAwesomeIcon icon={faInstagram} />;
	return (
		<footer>
			<div className='ft-main'>
				<div className='ft-a'>
					<h3>About Us</h3>
					<p>
						Founded in 1967, Charlie's Bakery has been a favorite of
						Warrensburg residents for decades. The dedication of the
						chefs to their work and the quality of ingredients that
						they use culminate in a mouth-watering experience.
					</p>
				</div>
				<div className='ft-b'>
					<h3>Links</h3>
					<ul>
						<li>
							<a href='https://www.instagram.com/carlosbakery/'>
								Carlo's Bakery
							</a>
						</li>
						<li>
							<a href='https://www.krispykreme.com/'>
								Krispy Kreme
							</a>
						</li>
						<li>
							<a href='https://reactjs.org/'>React Framework</a>
						</li>
						<li>
							<a href='https://fonts.google.com/'>Google Fonts</a>
						</li>
					</ul>
				</div>
			</div>

			<div className='ft-social'>
				<a href='https://www.facebook.com'>{facebookIcon}</a>
				<a href='https://www.twitter.com'>{twitterIcon}</a>
				<a href='https://www.instagram.com'>{instagramIcon}</a>
			</div>

			<div className='ft-end'>
				<p>Bakery &copy; 2019</p>
			</div>
		</footer>
	);
};

export default Footer;
