import { RoleType } from "../modules/user/type/user.type";

export interface PayloadToken {
  role: RoleType;
  sub: string;
}