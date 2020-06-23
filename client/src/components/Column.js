import React from 'react';
import styled from 'styled-components';

const Column = ({ title, desc, bg, img }) => {
	return (
		<ColumnGrid
			style={{
				backgroundColor: bg,
				backgroundImage: img
					? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img})`
					: '',
			}}
		>
			<ColumnItem>
				<h1>{title}</h1>
				<p>{desc}</p>
			</ColumnItem>
		</ColumnGrid>
	);
};

export default Column;

const ColumnGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	width: 100%;
	background-position: center;
	background-repeat: center;
	background-size: cover;
`;

const ColumnItem = styled.div`
	justify-self: center;
	align-self: center;
	overflow: hidden;
	max-width: 700px;
	padding: 1rem;
	color: white;

	p {
		line-height: 1.5;
		font-size: 1.5rem;
	}

	h1 {
		text-align: center;
	}

	h1,
	p {
		@media (max-width: 500px) {
			font-size: 1.3rem;
		}
	}
`;
