// population.tsx
import React, { useState } from "react";
import { ApiService } from "../services/apiServices";
import {PopulationInterface}  from "../models/population-interface";

const apiService = new ApiService();

const Population = () => {
  const [country, setCountry] = useState("");
  const [population, setPopulation] = useState("");
  const [error, setError] = useState("");

  const fetchPopulation = async () => {
    if (!country.trim()) {
      setError("Please enter a country name.");
      return;
    }

    try {
        const response = await apiService.sendRequest(PopulationInterface.name, { country },) as PopulationInterface.retval;

      if (!response) {
        throw new Error("Country not found or API error");
      }

      const data = response;

      if (data.count) {
        setPopulation(data.count.toLocaleString());
        setError("");
      } else {
        throw new Error("Population data not available");
      }
    } catch (error) {
      setPopulation("");
      setError(error instanceof Error ? error.message : "An error occurred");
    }
  };

  return (
    <div>
      <h2>Population Lookup</h2>
      <input
        type="text"
        placeholder="Enter country name"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <button onClick={fetchPopulation}>Get Population</button>

      {population && <p>Population of {country}: {population}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Population;
