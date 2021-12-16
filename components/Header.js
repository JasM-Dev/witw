import { useContext } from 'react';
import Link from 'next/link'
import DarkModeBttn from './DarkModeBttn';
import StyledHeader from './styled/Header.styled';
import {ThemeContext} from './ThemeContext';
const Header = () => {
	const {theme,setTheme} = useContext(ThemeContext);

	return (
		<StyledHeader dark={theme}>
			<h1 className='site_name'><Link href='/' passHref> Where in the world?</Link></h1>
			<DarkModeBttn theme={theme} />
		</StyledHeader>
	);
};

export default Header;
