import { setFileUploadDialogOpen } from "../../../common/client-details/client-details.thunks";
import { useAppDispatch, useAppSelector } from "../../../common/store/hooks";
import { RootState } from "../../../common/store/store";
import VDialog from "../../../ui/dialog/VDialog";
import FileUploadZone from "./FileUploadZone";

const FileUploadDialog = () => {
  const dispatch = useAppDispatch();
  const open = useAppSelector(
    (s: RootState) => s.clientDetails.fileUploadDialogOpen
  );

  return (
    <VDialog
      open={open}
      title="File upload"
      onClick={() => dispatch(setFileUploadDialogOpen(false))}
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
      />
    </VDialog>
  );
};

export default FileUploadDialog;
