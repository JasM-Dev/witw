import styled from 'styled-components';
const StyledIndexPage = styled.div`
	background-color: ${props => (props.dark ? '#202C36' : '#FAFAFA')};
	height: 100vh;
	width: 100vw;
	overflow-y: scroll;
	.form_container {
		margin-top: 24px;
		margin-bottom: 40px;
		@media (min-width: 1400px) {
			margin-top: 48px;
			margin-bottom: 48px;
		}
	}
	.countries_ul {
		display: grid;
		row-gap: 40px;
        @media(min-width: 760px){
            grid-template-columns: 1fr 1fr;
            row-gap: 60px;
        }
        @media(min-width: 1400px){
            grid-template-columns: repeat(4,1fr);
            row-gap: 75px;
        }
	}
	.error_notfound{
		color: ${props => (props.dark ? '#fff' : '#000')};
		display: block;
		margin: 30px auto 0 auto;
		width: fit-content;
		font-size: 20px;
		line-height: 24px;
		font-weight: 600;
	}
`;
export default StyledIndexPage;
