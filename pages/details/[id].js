import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ThemeContext } from '../../components/ThemeContext';
import Header from '../../components/Header';
import StyledDetailPage from '../../components/styled/DetailsPage.styled';

function CountryDetails({ country, borders }) {
	const { theme } = useContext(ThemeContext);
	const router = useRouter();
	const borderNames =
		borders === [] ? [] : borders.map(border => border.name.common);
	const countryLanguages = country.hasOwnProperty('languages') ? Object.values(country.languages).join(' ,') : 'N/A'; //creates string from array of languages
	const countryCurrencies = country.hasOwnProperty('currencies') ? Object.values(country['currencies']) : 'N/A'; // creates array of currencies


	return (
		<>
			<StyledDetailPage dark={theme}>
				<Header />
				<button className='back_bttn' onClick={() => router.back()}>
					<svg viewBox='0 0 18 18' xmlns='http://www.w3.org/2000/svg'>
						<path
							fillRule='evenodd'
							d='M5.81802 3.6967L6.87868 4.75736L3.3785 8.25754H16.7428L16.7428 9.74246H3.3785L6.87868 13.2426L5.81802 14.3033L0.514719 9L5.81802 3.6967Z'
						/>
					</svg>
					<span>Back</span>
				</button>
				<section className='content_container'>
					<div className='flag_img_container'>
						<Image
							alt={`national flag of ${country.name.common}`}
							src={country.flags['png']}
							width='560'
							height='401'
							layout='responsive'
						/>
					</div>
					<h2 className='country_name'>{country.name.common}</h2>

					<ul className='country_facts_grid'>
						<div className='facts_container_1'>
							<li>
								<span className='fact'>Native Name:</span>
								<span className='fact_stat'>
									{country.name.hasOwnProperty('nativeName') ?  Object.values(country.name.nativeName)[0].common : 'N/A'}
								</span>
							</li>

							<li>
								<span className='fact'>Population:</span>
								<span className='fact_stat'>
									{country.hasOwnProperty('population') ?country.population.toLocaleString('en-US') : 0}
								</span>
							</li>
							<li>
								<span className='fact'>Region:</span>
								<span className='fact_stat'>{country.hasOwnProperty('region') ? country.region : 'N/A'}</span>
							</li>

							<li>
								<span className='fact'>Sub Region:</span>
								<span className='fact_stat'>{country.hasOwnProperty('subregion') ? country.subregion : 'N/A'}</span>
							</li>

							<li>
								<span className='fact'>Capital:</span>
								<span className='fact_stat'>{country.hasOwnProperty('capital') ? country.capital : 'N/A'}</span>
							</li>
						</div>

						<div className='facts_container_2'>
							<li>
								<span className='fact'>Top Level Domain:</span>
								<span className='fact_stat'>{country.hasOwnProperty('tld') ? country.tld[0] : 'N/A'}</span>
							</li>

							<li>
								<span className='fact'>
									{countryCurrencies > 1 ? 'Currencies' : 'Currency'}:
								</span>
								<span className='fact_stat'>{countryCurrencies === 'N/A' ? 'N/A' : countryCurrencies.map(currency => currency.name).join(',') }</span>
							</li>

							<li>
								<span className='fact'>Languages:</span>
								<span className='fact_stat'>
								{countryLanguages}
								</span>
							</li>
						</div>
					</ul>
					<div className='borders_container'>
						<h3 className='borders_heading'>Border Countries:</h3>
						<ul className='borders_ul'>
							{borderNames.length === 0 ? (
								<li className='border_li'>None</li>
							) : (
								borderNames.map(name => (
									<li className='border_li' key={name}>
										<Link passHref href={`/details/${name}`}>
											{name}
										</Link>
									</li>
								))
							)}
						</ul>
					</div>
				</section>
			</StyledDetailPage>
		</>
	);
}
export const getStaticPaths = async () => {
	const res = await fetch('https://restcountries.com/v3.1/all');
	const data = await res.json();
	const paths = data.map(path => {
		return {
			params: { id: path.name.common },
		};
	});
	return {
		paths: paths,
		fallback: false,
	};
};

export const getStaticProps = async context => {
	const id = context.params.id;
	const encodedId = encodeURIComponent(id)
	const res = await fetch(`https://restcountries.com/v3.1/name/${encodedId}`);
	const countryData = await res.json();
	let bordersData = [];
	if (countryData[0].hasOwnProperty('borders')) {
		const bordersArr = countryData[0].borders;
		const borderRes = await fetch(
			`https://restcountries.com/v3/alpha?codes=${bordersArr}`
		);
		const bordersObj = await borderRes.json();
		bordersData = bordersObj;
	}

	return {
		props: {
			country: countryData[0],
			borders: bordersData,
		},
	};
};
export default CountryDetails;
