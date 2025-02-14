import { useState } from "react";
import { ApiService } from "../services/apiServices";
import { PopulationInterface } from "../models/population-interface";

const apiService = new ApiService();

export const usePopulation = () => {
  const [country, setCountry] = useState<PopulationInterface.Params["coutry"]>(null);
  const [population, setPopulation] = useState<PopulationInterface.PopulationIntProps["population"]>();
  const [error, setError] = useState<PopulationInterface.PopulationIntProps["error"]>("");

  const fetchPopulation = async () => {
    if (!country?.trim()) {
      setError("Please enter a country name.");
      return;
    }
    try {
      const response = (await apiService.sendRequest(PopulationInterface.name, { country })) as PopulationInterface.Retval;

      if (!response) {
        throw new Error("Country not found or API error");
      }

      if (response.count) {
        setPopulation(response.count);
      } else {
        throw new Error("Population data not available");
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : "An error occurred");
    }
  };

  return { country, setCountry, population, error, fetchPopulation };
};
