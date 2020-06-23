import React from 'react';
import Column from '../components/Column';
import styled from 'styled-components';

const AboutUs = () => {
	return (
		<>
			<Column
				title='Meet the founders of this fine establishment.'
				bg='#124'
			/>
			<AboutGrid>
				<AboutItem>
					<img
						src='https://lh3.googleusercontent.com/-OazQSrLKuz4/W34uUjlpYJI/AAAAAAAAAAs/n99RIvM8ouQs0HgibROoI-0CctXnQbA0wCEwYBhgL/w140-h139-p/Photo%2Bon%2B8-22-18%2Bat%2B10.08%2BPM%2B%25232.jpg'
						alt='Charles Graham'
					/>
					<h1>Charles Graham</h1>
					<p>
						Charles "Charlie" Graham founded the bakery in 1967.
						Before being born, he was known for his excellent
						gymnastic skills and undercover detective-work. Today,
						he is most well known for his donuts.
					</p>
				</AboutItem>
				<AboutItem>
					<img
						src='https://i.ytimg.com/vi/dJDyTaPHSSY/maxresdefault.jpg'
						alt='John Doe'
					/>
					<h1>John Doe</h1>
					<p>
						Not satisified with his fame as go-to placeholder name
						for coders for generations, John Doe decided to try his
						hand at cooking all kinds of sweets. What an interesting
						and profound man.
					</p>
				</AboutItem>
				<AboutItem>
					<img
						src='https://charlestonpourhouse.com/wp-content/uploads/2015/12/dallas_baker_cd.jpg'
						alt='Dallas Baker'
					/>
					<h1>Dallas Baker</h1>
					<p>
						Co-founded the Institute of Quantam Physics and
						Mathematics for the excellent League of Gentlemen in
						2017. In his spare time he likes to play CS:GO and bake
						flour-based goods.
					</p>
				</AboutItem>
				<AboutItem>
					<img
						src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAdOSZTb7M9WjYfTYnE2jAQPjcBNKPQ5vDPogEihhZOsyc2UdUOw&s'
						alt='Elijah Fisher'
					/>
					<h1>Elijah Fisher</h1>
					<p>
						Formally a fisherman famous for his record time fishing
						records that were recorded. Despite his rivalry with
						Dallas Baker, he has managed to work together when it
						comes to baking sweets. Fisher was jailed from 1983-2006
						for website editing crimes.
					</p>
				</AboutItem>
			</AboutGrid>
		</>
	);
};

export default AboutUs;

const AboutGrid = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding: 1rem 0;
	background-color: #ddd;
	justify-content: space-around;
`;

const AboutItem = styled.div`
	position: relative;
	background-color: #234;
	margin: 1rem;
	margin-top: 7rem;
	color: white;
	border-radius: 5px;
	padding: 1rem;
	max-width: 280px;
	line-height: 1.5;
	font-size: 18px;
	img {
		height: 140px;
		width: 140px;
		object-fit: cover;
		border-radius: 50000px;
		position: absolute;
		left: 84px;
		top: -105px;
	}
	h1 {
		font-family: 'Raleway';
		text-align: center;
	}
`;
