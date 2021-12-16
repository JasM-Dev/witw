import styled from 'styled-components';
const StyledCountryCard = styled.div`
	width: 70%;
	margin: 0 auto;
	padding-bottom: 46px;
	background-color: ${props => (props.dark ? '#2B3844' : '#fff')};
	box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.0294384);
	border-radius: 5px;
	cursor: pointer;
    @media(min-width: 1400px){
        width: 73.5%;
    }
	.country_name {
		font-weight: 900;
		font-size: 18px;
		line-height: 26px;
		color: ${props => (props.dark ? '#fff' : '#000')};
		margin-bottom: 16px;
		margin-top: 24px;
		text-align: left;
		padding-left: 24px;
	}
	.country_facts_grid {
		display: grid;
		row-gap: 8px;
		text-align: left;
		padding-left: 24px;
        li{
            color: ${props => (props.dark ? '#fff' : '#000')};
        }
	}
	.fact {
		font-weight: 900;
	}
    .fact_stat {
			font-weight: 400;
            margin-left: 4px;
		}
`;
export default StyledCountryCard;
