import {useContext}  from 'react';
import StyledDarkModeBttn from './styled/DarkModeBttn.styled';
import {ThemeContext} from './ThemeContext';

const DarkModeBttn = () => {
    const {theme,setTheme} = useContext(ThemeContext);
	return (
		<StyledDarkModeBttn onClick={() => setTheme(!theme)} dark={theme}>
			<svg className='moon_icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
				<path
					fillRule='evenodd'
					d ='M10.8426 11.052C7.73486 11.052 5.21543 8.74226 5.21543 5.89457C5.21543 4.82024 5.57343 3.82526 6.18514 3C3.75229 3.75612 2 5.86498 2 8.35045C2 11.4708 4.75943 14 8.16286 14C10.8743 14 13.1757 12.3945 14 10.1636C13.1 10.7238 12.0129 11.052 10.8426 11.052Z'/>
			</svg>
			<span className='bttn_text'>Dark Mode</span>
		</StyledDarkModeBttn>
	);
};

export default DarkModeBttn;
