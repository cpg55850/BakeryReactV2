import React from 'react';
import { Link } from 'react-router-dom';
import './Showcase.css';

const Showcase = ({ title, desc, bg, img }) => {
	return (
		<div
			className='showcaseGrid'
			style={{
				backgroundColor: bg,
				backgroundImage: img
					? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img})`
					: '',
			}}
		>
			<div className='showcaseItem'>
				<h1>{title}</h1>
				<p>{desc}</p>
				<Link to='./About'>
					<button className='btn-default'>Learn More</button>
				</Link>
			</div>
		</div>
	);
};

export default Showcase;
