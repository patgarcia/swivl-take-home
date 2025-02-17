import { FC } from "react";
import { StorageLocation } from "src/hooks/useLocationData.types";

type LocationDataProps = {
  location: StorageLocation;
};
const LocationData: FC<LocationDataProps> = ({ location }) => {
  return (
    <>
      <h2 className="font-semibold">{location.Name}</h2>
      <address className="not-italic">
        {location.Address}
        <br />
        <a href="tel:+12125551234">{location.PhoneNumber}</a>
      </address>
    </>
  );
};

export default LocationData;
