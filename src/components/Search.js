import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URI, geoApiOptions } from "../api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URI}/cities?minPopulation=1000&namePrefix=${inputValue}`, // Fetch city data based on user input
      geoApiOptions // Include any necessary options like headers
    )
      .then((response) => response.json()) // Parse the JSON response
      .then((response) => {
        return {
          options: response.data.map((city) => {
            // Map the response data to the format required by react-select
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name},${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err)); // Handle any errors by logging them to the console
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for City"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
