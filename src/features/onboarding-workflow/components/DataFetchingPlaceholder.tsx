import React from "react";
import { Triangle } from "react-loader-spinner";

const DataFetchingPlaceholder: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <Triangle
        height="240"
        width="240"
        color="#7F56D9"
        ariaLabel="triangle-loading"
        visible={true}
      />
      <p className="text-xs font-medium mt-4 text-secondary">
        This should only take a few seconds
      </p>
    </div>
  );
};

export default DataFetchingPlaceholder;
