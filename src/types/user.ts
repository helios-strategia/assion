export interface User {
  id: string | number;
  avatar: string;
  email: string;
  name: string;
  phone: string;
  role: string;
  version?: number;
}

export enum Role {
  ADMIN = "Адміністратор",
  CLIENT = "Юридичне лице",
}

export const RoleEncode: Record<string, string> = {
  Адміністратор: "ADMIN",
  "Юридичне лице": "CLIENT",
};
export const RoleEncodeUA: Record<string, string> = {
  ADMIN: "Адміністратор",
  CLIENT: "Юридичне лице",
};

export interface UserProfileResponse extends User {
  version: number;
}
