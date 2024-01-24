export interface IUser {
    _id: string;
    fullname: string;
    age: number;
    email: string;
    password: string;
    posts: Array<string>;
    img: string;
    role: string;
    status: boolean;
}