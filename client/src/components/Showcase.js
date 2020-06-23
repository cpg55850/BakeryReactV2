import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Showcase = ({ title, desc, bg, img }) => {
	return (
		<ShowcaseGrid
			style={{
				backgroundColor: bg,
				backgroundImage: img
					? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img})`
					: '',
			}}
		>
			<ShowcaseItem>
				<h1 class='underline'>{title}</h1>
				<p>{desc}</p>
				<Link to='./About'>
					<Button>Learn More</Button>
				</Link>
			</ShowcaseItem>
		</ShowcaseGrid>
	);
};

export default Showcase;

const ShowcaseGrid = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	grid-template-columns: 1fr;
	width: 100%;
	background-position: center;
	background-repeat: center;
	background-size: cover;
	height: 300px;
	@media (min-width: 700px) {
		height: 50vh;
	}
	@media (min-width: 1200px) {
		height: 100vh;
		font-size: 150%;
	}
`;

const ShowcaseItem = styled.div`
	text-align: center;
	font-weight: 100;
	overflow: hidden;
	max-width: 600px;
	padding: 1rem;
	color: white;
	p {
		margin-top: 1rem;
		margin-bottom: 1rem;
		line-height: 1.5;
		font-size: 1.5rem;
	}
	h1 {
		margin: 0;
		padding: 0;
		font-weight: 900;
		text-align: center;
	}
	p,
	h1 {
		@media (max-width: 700px) {
			font-size: 1.3rem;
		}
	}
`;

const Button = styled.button`
	background-color: transparent;
	border: 1px solid white;
	display: inline-block;
	height: 40px;
	width: 100px;
	transition: 0.2s;
	border-radius: 5px;
	color: white;
	&:hover {
		cursor: pointer;
		color: black;
		background-color: white;
	}
`;
