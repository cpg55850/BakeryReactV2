import React from 'react';
import './FourColumn.css';

const FourColumn = ({ title, desc, title2, desc2, bg, bg2, img }) => {
	return (
		<div
			className='FourColumnGrid'
			style={{
				backgroundImage: img
					? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img})`
					: '',
			}}
		>
			<div className='FourColumnItem' style={{ backgroundColor: bg }}>
				{title}
				{desc}
			</div>
			<div className='FourColumnItem' style={{ backgroundColor: bg2 }}>
				{title2}
				{desc2}
			</div>
			<div className='FourColumnItem' style={{ backgroundColor: bg }}>
				{title}
				{desc}
			</div>
			<div className='FourColumnItem' style={{ backgroundColor: bg2 }}>
				{title2}
				{desc2}
			</div>
		</div>
	);
};

export default FourColumn;
