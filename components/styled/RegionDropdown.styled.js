import styled from 'styled-components';
const StyledRegionDropdown = styled.ul`
	position: relative;
	background-color: transparent;
	border: none;
	width: 50%;
	margin-top: 40px;
	box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
	border-radius: 5px;
	z-index: 2;
	cursor: pointer;
	@media (min-width: 768px) {
		width: 30%;
	}
	@media (min-width: 1400px) {
		width: fit-content;
		min-width: 200px;
		z-index: 1;
		grid-column: 3/4;
		justify-self: end;
	}
	.dropdown_selected {
		padding: 14px 19px 14px 24px;
		background-color: ${props => (props.dark ? '#2B3844' : '#FFF')};
		color: ${props => (props.dark ? '#FFF' : '#000')};
		margin-bottom: 4px;
		text-transform: capitalize;
		display: flex;
		justify-content: space-between;
		font-size: 12px;
		line-height: 20px;
		.arrow_icon {
			fill: ${props => (props.dark ? '#FFF' : '#000')};
		}
		@media (min-width: 1400px) {
			font-size: 14px;
			.icon_container {
				margin-left: 24px;
			}
			padding: 18px 22px 18px 24px;
		}
	}
	.dropdown_list {
		background-color: ${props => (props.dark ? '#2B3844' : '#FFF')};
		border-radius: 5px;
		text-transform: capitalize;
		display: grid;
		row-gap: 8px;
		box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
		position: absolute;
		width: 100%;
	}
`;
export const StyledDropdownLi = styled.li`
	font-weight: ${props => (props.selected === props.region ? '700' : '400')};
	color: ${props => (props.dark ? '#FFF' : '#000')};
	padding: 16px 24px;
	font-size: 12px;
	line-height: 20px;
	@media (min-width: 1400px) {
		font-size: 14px;
	}
`;

export default StyledRegionDropdown;
