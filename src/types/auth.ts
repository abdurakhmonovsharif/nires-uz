// import { ROLE, USER_TYPES } from "./enums";
import { TBase } from "./responses";

import { ROLE } from "@/types/enums.ts";

export type TLogin = {
  email: string;
  password: string;
};

export type TLoginResponse = {
    user: TUser
} & TTokens;

export type TRegister = {
    firstName: string;
    lastName: string;
    patronymic: string;
    email: string;
    phone: string;
    companyName?: string;
    jobTitle: string;
    password: string;
    confirmPassword: string;
};

export type TTokens = {
    accessToken: string;
    refreshToken: string;
};

export type TUser = {
    id: string;
    phone: string;
    firstName: string;
    lastName: string;
    patronymic: string;
    role: ROLE;
    email: string;
    companyName?: string;
    jobTitle: string;
} & TBase

// export type TAdminUser = {
// phone: string;
// first_name: string;
// last_name: string;
// role: ROLE;
// type: USER_TYPES;
//   uid: string;
//   email: string;
//   displayName?: string;
// }
// & TBase;

