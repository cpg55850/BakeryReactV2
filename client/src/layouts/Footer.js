import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebook,
	faTwitter,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

const Footer = () => {
	const facebookIcon = <FontAwesomeIcon icon={faFacebook} />;
	const twitterIcon = <FontAwesomeIcon icon={faTwitter} />;
	const instagramIcon = <FontAwesomeIcon icon={faInstagram} />;
	return (
		<div>
			<FooterMain>
				<FooterA>
					<h3>About Us</h3>
					<p>
						Founded in 1967, Charlie's Bakery has been a favorite of
						Warrensburg residents for decades. The dedication of the
						chefs to their work and the quality of ingredients that
						they use culminate in a mouth-watering experience.
					</p>
				</FooterA>
				<FooterB>
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
				</FooterB>
			</FooterMain>

			<FooterSocial>
				<a href='https://www.facebook.com'>{facebookIcon}</a>
				<a href='https://www.twitter.com'>{twitterIcon}</a>
				<a href='https://www.instagram.com'>{instagramIcon}</a>
			</FooterSocial>

			<FooterEnd>
				<p>Bakery &copy; 2019</p>
			</FooterEnd>
		</div>
	);
};

export default Footer;

const FooterMain = styled.div`
	color: white;
	line-height: 1.5;
	display: flex;
	background-color: #345;
	justify-content: space-around;
	flex-wrap: wrap;
	ul {
		list-style-type: none;
		padding: 0;
		li a {
			color: white;
			text-decoration: none;
		}
	}
	@media (max-width: 500px) {
		height: auto;
	}
`;

const FooterA = styled.div`
	grid-column: 2 / 3;
	max-width: 400px;
	padding: 1rem 2rem;
	h3 {
		text-align: center;
	}
	@media (max-width: 500px) {
		grid-column: 1 / -1;
	}
`;

const FooterB = styled.div`
	grid-column: 3 / 4;
	padding: 1rem 2rem;
	h3 {
		text-align: center;
	}
	a:hover {
		cursor: pointer;
		color: #ccc;
	}
	@media (max-width: 500px) {
		grid-column: 1 / -1;
	}
`;

const FooterSocial = styled.div`
	background-color: #1f3040;
	color: white;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	a {
		color: white;
		text-decoration: none;
		font-size: 2rem;
		margin: 1rem;
		padding: 0 1rem;

		&:hover {
			cursor: pointer;
			color: #ccc;
		}
	}
`;

const FooterEnd = styled.div`
	background-color: #123;
	padding: 1px 20px;
	grid-column: 1 / -1;
	color: white;
`;
