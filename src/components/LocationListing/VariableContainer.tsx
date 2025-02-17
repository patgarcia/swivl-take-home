import { FC } from "react";
import { StorageLocation } from "src/hooks/useLocationData.types";

type VariableContainerProps = {
  variables: Partial<StorageLocation>;
};

const VariableContainer: FC<VariableContainerProps> = ({ variables }) => {
  return (
    <div className="px-6 py-4">
      {Object.entries(variables).map(([key, val]) => (
        <>
          <p className="text-orange-700/50">
            <span className="font-semibold">{key}: </span>
            {val}
          </p>
        </>
      ))}
    </div>
  );
};

export default VariableContainer;
