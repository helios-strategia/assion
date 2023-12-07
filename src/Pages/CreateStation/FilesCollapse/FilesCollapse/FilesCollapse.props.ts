import { fileItem } from "../../CreateStation";

export interface FilesCollapseProps {
  files: fileItem[];
  filesHandler: (a: any) => void;
  title: string;
}
