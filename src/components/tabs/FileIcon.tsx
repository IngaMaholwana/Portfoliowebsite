import { FileCode, FileText, Info } from 'lucide-react';

interface FileIconProps {
  fileType?: string;
}

function FileIcon({ fileType = 'default' }: FileIconProps) {
  const getIcon = () => {
    switch (fileType) {
      case 'js':
      case 'tsx':
        return <FileCode className="w-5 h-5 text-code-keyword" />;
      case 'css':
        return <FileCode className="w-5 h-5 text-code-function" />;
      case 'md':
        return <FileText className="w-5 h-5 text-code-string" />;
      default:
        return <Info className="w-5 h-5 text-foreground/60" />;
    }
  };

  return <span className="mr-2">{getIcon()}</span>;
}

export default FileIcon;
