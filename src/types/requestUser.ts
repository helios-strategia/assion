import { Role } from "./user";

export type requestUser = {
  email: string,
  password: string,
  name: string,
  role: Role,
  avatar: File
}