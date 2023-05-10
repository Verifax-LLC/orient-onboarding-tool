import React, { useEffect, useRef } from "react";
import { useAppSelector } from "../../common/store/hooks";
import { RootState } from "../../common/store/store";

interface VGridContainerProps {
  children: React.ReactNode;
}

const VGridContainer: React.FC<VGridContainerProps> = (
  props: VGridContainerProps
) => {
  const topRef = useRef<HTMLDivElement>(null);
  const formStatus = useAppSelector((s: RootState) => s.clientDetails.status);

  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [formStatus]);

  return (
    <div
      className="grid gap-10 grid-cols-1 text-center xs:w-full lg:w-1/2 lg:mx-auto p-6 self-center"
      ref={topRef}
    >
      {props.children}
    </div>
  );
};

export default VGridContainer;
