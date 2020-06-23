import React from 'react';
import styled from 'styled-components';

const Gallery = () => {
	return (
		<GalleryGrid>
			<div>
				<img src='img/apple_fritter.png' alt='' />
			</div>
			<div>
				<img src='img/apple_fritter.png' alt='' />
			</div>
			<div>
				<img src='img/apple_fritter.png' alt='' />
			</div>
			<div>
				<img src='img/apple_fritter.png' alt='' />
			</div>
			<div>
				<img src='img/apple_fritter.png' alt='' />
			</div>
			<div>
				<img src='img/apple_fritter.png' alt='' />
			</div>
			<div>
				<img src='img/apple_fritter.png' alt='' />
			</div>
			<div>
				<img src='img/apple_fritter.png' alt='' />
			</div>
		</GalleryGrid>
	);
};

export default Gallery;

const GalleryGrid = styled.div`
	display: grid;
	padding: 5px;
	grid-gap: 5px;
	grid-template-columns: repeat(4, 1fr);

	div {
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		img {
			width: 100%;
			height: 100%;
			transition: transform 0.2s;
			object-fit: cover;
			&:hover {
				transform: scale(1.5);
			}
		}
	}

	@media (max-width: 1000px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 600px) {
		grid-template-columns: 1fr;
	}
`;
