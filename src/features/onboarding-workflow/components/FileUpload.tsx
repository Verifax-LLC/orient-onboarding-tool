import React, { useRef } from "react";

interface FileUploadProps {
  id: string;
  name: string;
  label?: string;
  placeholder?: string;
  icon?: JSX.Element;
  required: boolean;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
}

const FileUpload: React.FC<FileUploadProps> = (props: FileUploadProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    // 👇️ open file input box on click of another element
    inputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }

    // 👇️ is now empty
    console.log(event.target.files);

    // 👇️ can still access file object here
    console.log(fileObj);
    console.log(fileObj.name);
  };
  return (
    <div className="form-control">
      {props.label && <label className="label">{props.label}</label>}
      <div
        className="w-full border h-fit flex flex-col gap-2"
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
        <p className="text-sm" style={{ color: "#6941C6" }}>
          Click to upload and attach files
        </p>
        <p className="text-sm text-secondary">
          SVG, PNG, JPG, PDF, Xlsx, Docx (max 10mb)
        </p>
      </div>
    </div>
  );
};

export default FileUpload;
