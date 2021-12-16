import styled from 'styled-components';

const StyledDarkModeBttn = styled.button`
	display: flex;
	align-items: center;
	color: ${props => (props.dark ? '#FFF' : '#111517')};
	.moon_icon {
		display: block;
		margin-right: 8px;
		fill: ${props => (props.dark ? '#FFF' : 'rgba(0,0,0,0)')};
		stroke: ${props => (props.dark ? '#FFF' : '#111517')};
		width: 16px;
	}
	.bttn_text {
		font-size: 12px;
		line-height: 16px;
		@media (min-width: 760px) {
			font-size: 16px;
			line-height: 22px;
		}
	}
`;
export default StyledDarkModeBttn;
