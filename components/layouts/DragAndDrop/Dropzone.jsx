import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

const Dropzone = ({ className, onFilesChange }) => {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles?.length) {
        const newFiles = acceptedFiles.map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        );
        setFiles((previousFiles) => [...previousFiles, ...newFiles]);
        onFilesChange([...files, ...newFiles]);
      }
    },
    [files, onFilesChange]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop,
  });

  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <div
      {...getRootProps({
        className: className,
      })}
    >
      <input {...getInputProps()} />
      <div className="flex flex-col items-center justify-center gap-4">
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag & drop files here, or click to select files</p>
        )}
      </div>
    </div>
  );
};

export default Dropzone;
