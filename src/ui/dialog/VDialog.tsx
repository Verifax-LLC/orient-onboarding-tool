import React, { ReactNode } from "react";

interface VDialogProps {
  open: boolean;
  isLoading?: boolean;
  title: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
}

const VDialog: React.FC<VDialogProps> = (props: VDialogProps) => {
  if (!props.open) return null;

  const handleDoneClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    props.onClick?.(e);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal modal-open">
        <div className="modal-box p-4">
          <h2 className="text-xl font-semibold">{props.title}</h2>
          <div className="p-4">{props.children}</div>
          <div className="modal-action">
            <button onClick={handleDoneClick} className="btn btn-primary">
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VDialog;
