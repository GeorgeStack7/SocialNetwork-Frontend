import { IUser } from "./user.interfaces";

export interface ILogin {
    user: IUser;
    token: string;
}

