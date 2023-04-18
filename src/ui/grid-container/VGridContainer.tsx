import React from "react";

interface VGridContainerProps {
  children: React.ReactNode;
}

const VGridContainer: React.FC<VGridContainerProps> = (
  props: VGridContainerProps
) => {
  return (
    <div className="grid gap-10 grid-cols-1 text-center shadow-xl xs:w-full lg:w-1/2 mx-auto p-6 rounded-4xl self-center">
      {props.children}
    </div>
  );
};

export default VGridContainer;
