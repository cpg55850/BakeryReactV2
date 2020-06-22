import React from 'react';
import './Column.css';

const Column = ({ title, desc, bg, img }) => {
	return (
		<div
			className='columnGrid'
			style={{
				backgroundColor: bg,
				backgroundImage: img
					? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img})`
					: '',
			}}
		>
			<div className='columnItem'>
				<h1>{title}</h1>
				<p>{desc}</p>
			</div>
		</div>
	);
};

export default Column;
