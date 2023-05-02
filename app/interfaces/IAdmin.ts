import { User } from "../types/UserType";
import IUser from "./IUser";

export default interface IAdmin extends IUser{
    banUser(user: User): void;
    unbanUser(user: User): void;
}