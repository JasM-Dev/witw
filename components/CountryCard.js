import  {useContext}  from 'react';
import { ThemeContext } from '../components/ThemeContext';
import Image from 'next/image';
import StyledCountryCard from './styled/CountryCard.styled';
import Link from 'next/link';

const CountryCard = ({ country }) => {
	const { theme } = useContext(ThemeContext);
	
	
	return (
		<Link passHref href={`/details/${country.name.common}` }>
		<StyledCountryCard dark={theme}>
			<div className='img_container_flag'>
				<Image
					alt={`national flag of ${country.name.common}`}
					src={country.flags["png"]}
					width='264'
					height='160'
					layout='responsive'
				/>
				
				
			</div>
			<div className='country_details_container'>
				<h2 className='country_name'>{country.name.common}</h2>
				<ul className='country_facts_grid'>
					<li>
					<span className='fact'>Population:</span>
					<span className='fact_stat'>{country.population.toLocaleString('en-US')}</span>
					</li>
					<li>
					<span className='fact'>Region:</span>
					<span className='fact_stat'>{country.region}</span>
					</li>
					<li>
					<span className='fact'>Capital:</span>
					<span className='fact_stat'>{country.capital}</span>
					</li>
				</ul>
			</div>
		</StyledCountryCard>
		</Link>
	);
};

export default CountryCard;
