// population.tsx
import React, { useState } from "react";
import { ApiService } from "../services/apiServices";
import {PopulationInterface}  from "../models/population-interface";

const apiService = new ApiService();

const Population = () => {
  const [country, setCountry] = useState<PopulationInterface.Params['country']>(null);
  const [population, setPopulation] = useState<PopulationInterface.PopulationIntProps['population']>();
  const [error, setError] = useState<PopulationInterface.PopulationIntProps['error']>("");

  const fetchPopulation = async () => {
    if (!country?.trim()) {
      setError("Please enter a country name.");
      return;
    }
    const params: PopulationInterface.Params = { country };

    try {
        const response = await apiService.sendRequest(PopulationInterface.name, { params },) as PopulationInterface.Retval;

      if (!response) {
        throw new Error("Country not found or API error");
      }

      const data = response;

      if (data.count) {
        setPopulation(data.count);
        setError("");
      } else {
        throw new Error("Population data not available");
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : "An error occurred");
    }
  };

  return (
    <div>
      <h2>Population Lookup</h2>
      <input
        type="text"
        placeholder="Enter country name"
        value={country ?? ""} 
        onChange={(e) => setCountry(e.target.value)}
      />
      <button onClick={fetchPopulation}>Get Population</button>

      {population && <p>Population of {country}: {population}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Population;
