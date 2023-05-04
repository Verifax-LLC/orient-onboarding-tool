import { formatBytes } from "../../../common/helpers/files";

interface FileListProps {
  files: File[];
  removeItem: (index: number) => void;
}

const FileList: React.FC<FileListProps> = (props: FileListProps) => {
  return (
    <div className="max-h-70 overflow-auto">
      {props.files.map((file, _idx) => (
        <div
          key={_idx}
          className="flex flex-row justify-between items-center border border-primary rounded-md w-full my-4 p-2"
        >
          <div className="flex-col">
            <button
              className="p-2 rounded-full"
              style={{ backgroundColor: "#F4EBFF" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
                />
              </svg>
            </button>
            <p className="text-secondary text-xs">{file.type}</p>
          </div>
          <div className="flex-col gap-2">
            <p className="text-primary">{file.name}</p>
            <p className="text-xs">{formatBytes(file.size)}</p>
          </div>
          <button
            className="p-2 hover:bg-base-200 rounded-full"
            onClick={() => props.removeItem(_idx)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
};

export default FileList;
