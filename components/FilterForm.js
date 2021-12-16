import StyledFilterForm from './styled/FilterForms.styled';
import CountryInput from './CountryInput';
import RegionDropdown from './RegionDropdown';

const FilterForm = ({handleChange,handleClick,selectedRegion}) => {
	return (
		<StyledFilterForm>
			<CountryInput handleChange={handleChange} />
            <RegionDropdown handleClick={handleClick} selectedRegion={selectedRegion}/>
		</StyledFilterForm>
	);
};

export default FilterForm;
