import { User } from "../../types/user";

export interface UpdateUserProps {
  open: User | null;
  hideModal: () => void;
}
