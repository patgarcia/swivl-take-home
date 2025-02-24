import clsx from "clsx";
import React, { FC, useState } from "react";
import { StorageLocation } from "src/hooks/useLocationData.types";
import VariableContainer from "./VariableContainer";
import LocationData from "./LocationData";

type locationItemProps = {
  location: StorageLocation;
};

const LocationItem: FC<locationItemProps> = ({ location }) => {
  const [showVars, setShowVars] = useState<boolean>(false);

  const revealClasses = clsx(
    "bg-orange-100/40 rounded-md flex flex-col gap-4 transition-all ease-in-out duration-700 max-h-0 overflow-hidden",
    { "max-h-96": showVars }
  );

  const toggleVars = () => setShowVars((show) => !show);

  const { Name, PhoneNumber, Address, id, orgId, ...variables } = location;

  return (
    <article className="text-slate-700 px-9 py-7 rounded-lg bg-white drop-shadow-lg flex flex-col gap-4 tracking-wide">
      <header>
        <LocationData location={location} />
      </header>
      <a className="underline" href="#" onClick={toggleVars}>
        Show Variables
      </a>
      <footer className={revealClasses}>
        <VariableContainer variables={variables} />
      </footer>
    </article>
  );
};

export default React.memo(LocationItem);
