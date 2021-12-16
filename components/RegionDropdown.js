import { useContext, useState } from 'react';
import StyledRegionDropdown, {StyledDropdownLi} from './styled/RegionDropdown.styled';
import { ThemeContext } from './ThemeContext';

const RegionDropdown = ({handleClick,selectedRegion}) => {
	const {theme} = useContext(ThemeContext)
	const regions = ['africa', 'americas', 'asia', 'europe','all', 'oceania'];
	const [showingDropdown, setShowingDropdown] = useState(false);
	const handleSelection = (region) => {
		setShowingDropdown(!showingDropdown);
		handleClick(region)
	};
	return (
		<StyledRegionDropdown dark={theme}>
			<li className='dropdown_selected' onClick={() => setShowingDropdown(!showingDropdown)}>
				{selectedRegion === '' ? 'Filter by Region' : selectedRegion}

				<span className="icon_container">
					<svg className='arrow_icon'
						width='8'
						height='6'
						viewBox='0 0 8 6'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							fillRule='evenodd'
							d='M6.875 0.875L4 3.75L1.125 0.875L0.25 1.75L4 5.5L7.75 1.75L6.875 0.875Z'
							
						/>
					</svg>
				</span>
			</li>

			{showingDropdown && (
				<ul className='dropdown_list' >
					{regions.map(region => (
						<StyledDropdownLi  key={region} selected={selectedRegion} region={region} dark={theme} className='dropdown_li ' onClick={() => handleSelection(region)}>
							{region}
						</StyledDropdownLi>
					))}
				</ul>
			)}
		</StyledRegionDropdown>
	);
};

export default RegionDropdown;
