import styled from 'styled-components';


const StyledCountryInput = styled.input`
	outline: 0;
	border: 0;
	font-size: 12px;
	line-height: 20px;
	padding: 14px 26px;
	width: 100%;
	background-color: rgba(0,0,0,0);
	color: ${props => (props.dark ? '#FFF' : '#000')};
	@media(min-width: 900px){
		width: 600px;
	}
	@media(min-width: 1400px){
		font-size: 14px;
		padding: 18px 32px;
	}
`;
export default StyledCountryInput;
