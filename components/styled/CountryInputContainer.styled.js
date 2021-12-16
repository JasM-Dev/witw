import styled from 'styled-components';
const StyledCountryInputContainer = styled.div`
	display: flex;
	align-items: center;
	box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
	background: ${props => (props.dark ? '#2B3844'  : '#FFF')};
	width: 100%;
	max-width: 600px;
	
	span {
		display: block;
		display: flex;
		align-items: center;
		padding-left: 32px;
		border-radius: 5px;
		background-color: transparent;
		height: 100%;
		.search_icon {
			width: 16px;
			height: 16px;
			fill: ${props => (props.dark ? '#FFF' : '#B2B2B2')};
		}
	}
`;

export default StyledCountryInputContainer;
