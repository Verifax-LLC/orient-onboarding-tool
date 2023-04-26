import React, { useRef } from "react";
import { useAppDispatch } from "../../../common/store/hooks";

interface FileUploadProps {
  id: string;
  name: string;
  label?: string;
  placeholder?: string;
  icon?: JSX.Element;
  required: boolean;
  onClick?: () => void;
}

const FileUploadZone: React.FC<FileUploadProps> = (props: FileUploadProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log(inputRef);
    props.onClick?.() ?? inputRef.current?.click();
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []).map((f: File) => f);
    //upload to server?
  };

  return (
    <div className="form-control" onClick={handleClick}>
      {props.label && <label className="label">{props.label}</label>}
      <div
        className="w-full border h-fit flex flex-col gap-2 p-1"
        style={{ borderColor: "#EAECF0" }}
      >
        <div className="w-1/6 mx-auto">
          <div
            className="flex justify-center items-center animate-pulse"
            style={{
              borderRadius: "50%",
              height: "56px",
              width: "56px",
              backgroundColor: "#F5F6F8",
            }}
          >
            <div
              className="flex justify-center items-center"
              style={{
                borderRadius: "50%",
                height: "40px",
                width: "40px",
                backgroundColor: "#dcdddf",
              }}
            >
              {props.icon}
            </div>
          </div>
        </div>
        <p className="text-sm text-center" style={{ color: "#6941C6" }}>
          Click to upload and attach files
        </p>
        <p className="text-sm text-center text-secondary">
          SVG, PNG, JPG, PDF, Xlsx, Docx (max 10mb)
        </p>
        <input
          type="file"
          className="hidden"
          ref={inputRef}
          onChange={handleFileUpload}
        />
      </div>
    </div>
  );
};

export default FileUploadZone;
