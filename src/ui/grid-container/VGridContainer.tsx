import React from "react";

interface VGridContainerProps {
  children: React.ReactNode;
}

const VGridContainer: React.FC<VGridContainerProps> = (
  props: VGridContainerProps
) => {
  return (
    <div className="grid gap-10 grid-cols-1 text-center xs:w-full lg:w-1/2 lg:mx-auto p-6 self-center">
      {props.children}
    </div>
  );
};

export default VGridContainer;
