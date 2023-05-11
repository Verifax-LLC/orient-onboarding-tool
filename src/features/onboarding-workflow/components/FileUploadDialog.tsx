import axios from "axios";
import React from "react";
import {
  setFileUploadDialogOpen,
  setHasUploadedFiles,
} from "../../../common/client-details/client-details.thunks";
import { useAppDispatch, useAppSelector } from "../../../common/store/hooks";
import { RootState } from "../../../common/store/store";
import VDialog from "../../../ui/dialog/VDialog";
import FileList from "./FileList";
import FileUploadZone from "./FileUploadZone";

const FileUploadDialog = () => {
  const dispatch = useAppDispatch();
  const open = useAppSelector(
    (s: RootState) => s.clientDetails.fileUploadDialogOpen
  );

  const client = useAppSelector(
    (s: RootState) => s.clientDetails.currentClient
  );
  const tenant = useAppSelector((s: RootState) => s.tenantDetails.tenant);

  const [isLoading, setIsLoading] = React.useState(false);

  const [fileListItems, setFileListItems] = React.useState<File[]>([]);

  const removeFileFromList = (index: number) => {
    setFileListItems((prev) => prev.filter((_, i) => i !== index));
  };

  const uploadFiles = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (fileListItems.length === 0 || !client?.id || !tenant.id) return;
      const formData = new FormData();
      formData.append("TenantId", tenant.id.toString());
      formData.append("ClientId", client.id.toString());
      fileListItems.forEach((file) => formData.append("files", file));
      const response = await axios.post(
        import.meta.env.VITE_FILE_SERVICE_URL,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200) {
        dispatch(setHasUploadedFiles(true));
      } else {
        console.error(response);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
      dispatch(setFileUploadDialogOpen(false));
    }
  };

  return (
    <VDialog
      open={open}
      buttonText="Upload"
      isLoading={isLoading}
      title="File upload"
      onClick={(e) => uploadFiles(e)}
    >
      <FileUploadZone
        id={"dialogFileZone"}
        name={"dialogFileZone"}
        icon={
          <img
            src="/file-upload-icon.png"
            alt="File upload icon"
            color="black"
          />
        }
        required={true}
        setFileListItems={setFileListItems}
      />
      <div className="w-full h-fit mt-4">
        {fileListItems.length > 0 && (
          <FileList files={fileListItems} removeItem={removeFileFromList} />
        )}
      </div>
    </VDialog>
  );
};

export default FileUploadDialog;
