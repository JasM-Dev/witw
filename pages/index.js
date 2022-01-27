import { ThemeContext } from '../components/ThemeContext';
import StyledIndexPage from '../components/styled/Index.styled';
import FilterForm from '../components/FilterForm';
import Header from '../components/Header';
import { useContext, useState } from 'react';
import CountryCard from '../components/CountryCard';

export default function Home({ countryData }) {
	const { theme } = useContext(ThemeContext);
	const countries = countryData;

	const [filteredCountries, setFilteredCountries] = useState(countries);
	const [regionFilter, setRegionFilter] = useState('');

	const sortedFilteredContries = filteredCountries.sort((a, b) => {
		if (a.name.common < b.name.common) return -1;
		if (a.name.common > b.name.common) return 1;
	}).filter(country =>{
		if(regionFilter === ''|| regionFilter === 'all') return country;
		else{ 
			if(regionFilter === country.region.toLowerCase()) return country
		 }
	});

	const filterByName = query => {
		if (query === '') {
			setFilteredCountries(countries);
		} else {
			setFilteredCountries(prev =>
				prev.filter(country => {
					const loweredQuery = query.toLowerCase();
					const loweredCountry = country.name.common.toLowerCase();
					if (loweredCountry.includes(loweredQuery)) {
						return country;
					}
				})
			);
		}
	};

	return (
		<StyledIndexPage dark={theme}>
			<Header />
			<div className='form_container'>
				<FilterForm
					handleChange={filterByName}
					handleClick={(region) =>setRegionFilter(region)}
					selectedRegion={regionFilter}
				/>
			</div>
			<ul className='countries_ul'>
				{sortedFilteredContries.map(country => (
					<CountryCard key={country.name.official} country={country} />
				))}
			</ul>
			{filteredCountries.length === 0 && (
				<span className='error_notfound'>
					No countries found...
					<br />
					Try a new search
				</span>
			)}
		</StyledIndexPage>
	);
}

export async function getStaticProps() {
	const res = await fetch('https://restcountries.com/v3.1/all');
	const countryData = await res.json();

	return {
		props: {
			countryData, // will be passed to the page component as props
		},
	};
}
