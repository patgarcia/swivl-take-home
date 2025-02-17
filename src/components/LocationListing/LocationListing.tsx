import { FC } from "react";
import LocationItem from "./LocationItem";
import { StorageLocation } from "src/hooks/useLocationData.types";

type LocationListingProps = { locations: any };

const LocationListing: FC<LocationListingProps> = ({ locations }) => {
  return (
    <section className="px-5 py-6 flex flex-col gap-8">
      {locations.map((location: StorageLocation) => (
        <LocationItem key={location.id} location={location} />
      ))}
    </section>
  );
};

export default LocationListing;
