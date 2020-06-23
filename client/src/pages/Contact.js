import React from 'react';
import Column from '../components/Column';
import styled from 'styled-components';

const Contact = () => {
	return (
		<>
			<Column
				title='Contact Us'
				desc='Let us know what you think of our restaurant.'
				bg='#007476'
			/>
			<Grid>
				<FormContainer>
					<form>
						<label for='fname'>First Name</label>
						<input
							type='text'
							id='fname'
							name='firstname'
							placeholder='Your name..'
						/>

						<label for='lname'>Last Name</label>
						<input
							type='text'
							id='lname'
							name='lastname'
							placeholder='Your last name..'
						/>

						<label for='country'>Country</label>
						<select id='country' name='country'>
							<option value='australia'>Australia</option>
							<option value='canada'>Canada</option>
							<option value='usa'>USA</option>
						</select>

						<label for='subject'>Subject</label>
						<textarea
							id='subject'
							name='subject'
							placeholder='Write something..'
							style={{ height: '200px' }}
						></textarea>

						<input type='submit' value='Submit' />
					</form>
				</FormContainer>
			</Grid>
		</>
	);
};

export default Contact;

const Grid = styled.div`
	display: grid;
	background-color: #f2f2f2;
	grid-template-columns: 1fr repeat(2, minmax(auto, 25em)) 1fr;
`;

const FormContainer = styled.div`
	grid-column: 2 / 4;
	border-radius: 5px;
	padding: 20px;
`;
