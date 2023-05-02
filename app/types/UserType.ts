import { Post } from "./PostType";

export type User = {
    userID: number;
    name: string;
    lastName: string;
    email: string;
}

export type FinalUser = {
    following?: Array<User>;
    followers?: Array<User>;
    normalUser: User;
    posts?: Array<Post>
    password: string;
    age: number;
}