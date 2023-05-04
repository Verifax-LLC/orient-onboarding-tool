import React, { useRef } from "react";

interface FileUploadZoneProps {
  id: string;
  name: string;
  label?: string;
  placeholder?: string;
  icon?: JSX.Element;
  required: boolean;
  onClick?: () => void;
  setFileListItems?: React.Dispatch<React.SetStateAction<File[]>>;
}

export const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
export const ACCEPTED_FILE_TYPES = [
  "image/png",
  "image/jpeg",
  "image/svg+xml",
  "application/pdf",
  "application/xlsx",
  "application/docx",
  "application/msword",
  "application/doc",
];

const FileUploadZone: React.FC<FileUploadZoneProps> = (
  props: FileUploadZoneProps
) => {
  const [errors, setErrors] = React.useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  //validate files
  const validateFiles = (files: File[]) => {
    const errors: string[] = [];

    files.forEach((file) => {
      if (file.size > MAX_FILE_SIZE) {
        setErrors((prev) => [...prev, `${file.name} is too large`]);
      }

      if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
        setErrors((prev) => [
          ...prev,
          `${file.name} is not an accepted file type`,
        ]);
      }
    });

    return errors;
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    props.onClick?.() ?? inputRef.current?.click();
  };

  const handleFileList = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []).map((f: File) => f);
    validateFiles(files);

    if (errors.length === 0) {
      props.setFileListItems?.(files);
    }
  };

  return (
    <div className="form-control" onClick={handleClick}>
      {props.label && <label className="label">{props.label}</label>}
      <div
        className="w-full border h-fit flex flex-col gap-2 p-1"
        style={{ borderColor: "#EAECF0" }}
      >
        <input
          type="file"
          className="hidden"
          ref={inputRef}
          onChange={handleFileList}
          multiple
        />
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
      </div>
      {errors.length > 0 && (
        <p className="text-sm text-red-500">{errors.join(", ")}</p>
      )}
    </div>
  );
};

export default FileUploadZone;
