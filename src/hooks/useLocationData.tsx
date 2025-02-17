import { useEffect, useState } from "react";
import { networkService } from "../services/";
import {
  LocationVariables,
  OrgVariables,
  StorageLocation,
  StorageVariable,
} from "./useLocationData.types";

// To reactivate the cors-anywhere service visit the https://cors-anywhere.herokuapp.com/ and "Request temporary access"
const BASE_URL =
  "https://cors-anywhere.herokuapp.com/https://swivl-interview-e61c73ef3cf5.herokuapp.com/api/";
const buildApiUrl = (path: string) => BASE_URL + path;

const useLocationData = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error>();
  const [locationData, setLocationData] = useState<StorageLocation[]>([]);

  const locationUrl = buildApiUrl("locations");
  const locationVariablesUrl = buildApiUrl("variables");

  // NOTE: No need for useCallback due to react 19
  const getLocationData = async () => {
    try {
      setLoading(true);
      const locations = await networkService(locationUrl);
      const locationVariables = await networkService(locationVariablesUrl);

      // Aggregate organization vars
      const varsByOrg = locationVariables
        .filter((variable: StorageVariable) => !variable.locationId)
        .reduce((acc: OrgVariables, curr: StorageVariable) => {
          acc[curr.orgId] = {
            ...(acc[curr.orgId] ?? {}),
            [curr.key]: curr.value,
          };
          return acc;
        }, {});

      // Aggregate location vars
      const varsByLoc = locationVariables
        .filter((o: StorageVariable) => o.locationId)
        .reduce((acc: LocationVariables, curr: StorageVariable) => {
          if (curr.locationId) {
            acc[curr.locationId] = {
              ...(acc[curr.locationId] ?? {}),
              [curr.key]: curr.value,
            };
          }
          return acc;
        }, {});

      // Variable merging
      const locData = locations.map((loc: any) => ({
        ...loc,
        ...varsByOrg[loc.orgId],
        ...varsByLoc[loc.id],
      }));

      setError(undefined);
      setLoading(false);
      setLocationData(locData);
    } catch (e) {
      setError(e as Error);
    }
  };

  useEffect(() => {
    getLocationData();
  }, []);

  return { locationData, loading, error };
};

export default useLocationData;
