import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	input[type=text], select, textarea {
		font-size: 1.3rem;
		width: 100%; 
		padding: 12px; 
		border: 1px solid #ccc; 
		border-radius: 4px; 
		box-sizing: border-box; 
		margin-top: 6px;
		margin-bottom: 16px; 
		resize: vertical;
	}

	input[type=submit] {
		transition: .2s;
		font-size: 1.3rem;
		background-color: #009797;
		color: white;
		padding: 12px 20px;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}

	input[type=submit]:hover {
		background-color: #005555;
	}
`;

export default GlobalStyle;
