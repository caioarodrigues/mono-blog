import { User } from "./UserType";

export type Comment = {
    user: User;
    comment: string;
    likes?: number;
}