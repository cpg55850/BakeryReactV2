import React, { Component } from 'react';
import './TwoColumn.css';

export class Column extends Component {
	render() {
		const { title, desc, title2, desc2, bg, bg2, img } = this.props;
		return (
			<div
				className='showcaseGrid2'
				style={{
					backgroundImage: img
						? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img})`
						: '',
				}}
			>
				<div className='showcaseItem2' style={{ backgroundColor: bg }}>
					<h1>{title}</h1>
					<p>{desc}</p>
				</div>
				<div className='showcaseItem2' style={{ backgroundColor: bg2 }}>
					<h1>{title2}</h1>
					<p>{desc2}</p>
				</div>
			</div>
		);
	}
}

export default Column;
