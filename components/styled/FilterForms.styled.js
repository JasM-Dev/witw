import styled from 'styled-components';
const StyledFilterForm = styled.form`

background-color: transparent;
width: 100%;
padding-left: 16px;
padding-right: 16px;

@media(min-width: 768px){
    padding-left: 32px;
    padding-right: 32px;
}
@media(min-width: 1400px){
display: grid;
grid-template-columns: 40% 40% 20%;
align-items: end;
    padding-left: 80px;
    padding-right: 80px;
}
`
export default StyledFilterForm