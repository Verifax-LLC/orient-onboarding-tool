import axios from "axios";
import React from "react";
import VButton from "../../../ui/button/VButton";

const UploadDocument: React.FC = () => {
  const [file, setFile] = React.useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0] ?? null);
  };
  const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!file) {
      return;
    }
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("/api/verify", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const { data } = res;

      console.log("File was uploaded successfylly:", data);
    } catch (error) {
      console.error(error);
      alert("Sorry! something went wrong.");
    }
  };

  return (
    <form
      encType="multipart/form-data"
      className="flex flex-col justify-center items-center gap-4 text-center"
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleUpload(e).catch((err) => console.error(err));
      }}
    >
      <label htmlFor="uploadVerificationDocument">Upload a document</label>
      <input
        name="uploadVerificationDocument"
        type="file"
        className="mx-auto file-input file-input-bordered file-input-primary w-full max-w-xs"
        onChange={handleFileChange}
      />
      <VButton text="Submit" />
    </form>
  );
};

export default UploadDocument;
