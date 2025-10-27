import FileIcon from './FileIcon';

interface FileProps {
  name: string;
  extension: string;
}

function File({ name, extension }: FileProps) {
  return (
    <div className="flex items-center text-sm">
      <FileIcon fileType={extension} />
      <span className="truncate">{name}.{extension}</span>
    </div>
  );
}

export default File;
