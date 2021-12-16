import styled from 'styled-components';

const StyledDetailPage = styled.div`
	background-color: ${props => (props.dark ? '#202C36' : '#FAFAFA')};
	height: 100vh;
	overflow-y: scroll;

	.back_bttn {
		padding: 6px 23px 6px 24px;
		box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.293139);
		border-radius: 2px;
		margin: 40px 0 64px 28px;
		color: ${props => (props.dark ? '#FFF' : '#111517')};
		display: flex;
		align-items: center;
		font-size: 14px;
		line-height: 20px;
		background-color: ${props => (props.dark ? '#2B3844' : '#FFF')};
		@media (min-width: 760px) {
			margin-top: 55px;
		}
		@media (min-width: 1400px) {
			margin-top: 80px;
			margin-bottom: 80px;
			grid-row: 1/2;
			margin-left: 80px;
			font-weight: 16px;
		}
		svg {
			fill: ${props => (props.dark ? '#FFF' : '#000')};
			margin-right: 8px;
			width: 18px;
			height: 18px;
		}
	}
	.content_container {
		@media (min-width: 1400px) {
			display: grid;
			grid-template-columns: 560px auto;
			padding-left: 80px;
			column-gap: 144px;
		}
	}
	.flag_img_container {
		width: 85%;
		margin-left: auto;
		margin-right: auto;
		@media (min-width: 760px) {
			width: 70%;
		}
		@media (min-width: 1400px) {
			width: 560px;
			height: 401px;
			grid-row: 1/5;
			align-self: start;
			margin-left: 0;
			margin-right: 0;
		}
	}
	.country_name {
		font-size: 22px;
		line-height: 30px;
		font-weight: 800;
		color: ${props => (props.dark ? '#FFF' : '#111517')};
		margin-bottom: 16px;
		margin-top: 44px;
		padding-left: 28px;

		@media (min-width: 760px) {
			margin-top: 60px;
			padding-left: 120px;
		}
		@media (min-width: 1400px) {
			grid-column: 2/3;
			margin-top: 0;
			margin-bottom: 23px;
			padding-top: 39px;
			font-size: 32px;
			line-height: 44px;
			padding-left: 0;
		}
	}
	.country_facts_grid {
		padding-left: 28px;
		color: ${props => (props.dark ? '#FFF' : '#111517')};
		display: grid;
		row-gap: 32px;
		@media (min-width: 760px) {
			grid-template-columns: 1fr 1fr;
			padding-left: 120px;
		}
		@media (min-width: 1400px) {
			grid-column: 2/3;
			margin-bottom: 68px;
			padding-left: 0;
		}
		.fact {
			font-size: 14px;
			line-height: 32px;
			font-weight: 600;
		}
		.fact_stat {
			margin-left: 8px;
			font-weight: 300;
			font-size: 14px;
			line-height: 32px;
		}
		@media (min-width: 1400px) {
			font-size: 16px;
		}
	}
	.borders_container {
		padding-left: 28px;
		@media (min-width: 760px) {
			padding-left: 100px;
		}
		@media (min-width: 1400px) {
			display: flex;
			gap: 10px;
			padding-left: 0;
		}
	}
	.borders_heading {
		margin-top: 34px;
		margin-bottom: 16px;
		color: ${props => (props.dark ? '#FFF' : '#111517')};
		font-size: 16px;
		line-height: 24px;
		@media (min-width: 1400px) {
			margin-top: 0;
			margin-bottom: 0;
			padding-right: 0;
		}
	}
	.borders_ul {
		width: 65%;
		padding-left: 28px;
		padding-bottom: 60px;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		column-gap: 10px;
		row-gap: 20px;
		@media (min-width: 1400px) {
			display: flex;
			flex-wrap: wrap;
			padding-bottom: 0;
			padding-left: 0;
		}
		.border_li {
			padding: 6px 0 6px 0;
			box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.293139);
			border-radius: 2px;
			color: ${props => (props.dark ? '#FFF' : '#111517')};
			font-size: 12px;
			line-height: 16px;
			font-weight: 300;
			background-color: ${props => (props.dark ? '#2B3844' : '#FFF')};
			width: fit-content;
			text-align: center;
			width: 96px;
			align-self: center;

			a {
				text-decoration: none;
			}
		}
	}
`;

export default StyledDetailPage;
