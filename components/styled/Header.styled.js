import styled from 'styled-components';
const StyledHeader = styled.header`
	background-color: ${props => (props.dark ? '#2B3844' : '#fff')};
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0562443);
	padding: 30px 16px;
	display: flex;
	justify-content: space-between;
    @media(min-width: 760px){
        padding: 45px 61px;
    }
    @media(min-width: 1400px){
        padding: 23px 81px;
    }
	.site_name {
        a{
            text-decoration: none;
        }
		font-size: 14px;
		line-height: 20px;
		font-weight: 800;
		color: ${props => (props.dark ? '#FFF' : '#111517')};
        @media(min-width: 760px){
            font-size: 20px;
            line-height: 25px;
        }
        @media(min-width: 1400px){
            font-size: 24px;
            line-height: 32px;
        }
	}
`;
export default StyledHeader;
