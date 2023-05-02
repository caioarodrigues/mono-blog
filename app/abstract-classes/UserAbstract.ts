import IUser from "../interfaces/IUser";
import { Post } from "../types/PostType";
import { FinalUser as FinalUserType, User as UserType } from "../types/UserType";
import DBController from "../controllers/DBController";

export default abstract class User implements IUser {
    posts?: Post[];
    normalUser: UserType;
    password: string;
    age: number;
    followers?: UserType[];
    following?: UserType[];
    
    protected constructor(thisUser: FinalUserType){
        const { age, password, normalUser } = thisUser;
        
        this.password = password;
        this.age = age;
        this.normalUser = normalUser;
        this.followers = [];
        this.following = [];
    }
    createPost(post: Post): void {
        throw new Error("Method not implemented.");
    }
    deletePost(id: number): void {
        throw new Error("Method not implemented.");
    }
    editPost(id: number): void {
        throw new Error("Method not implemented.");
    }
    seePost(id: number): Post {
        throw new Error("Method not implemented.");
    }
    comment(comment: string): void {
        throw new Error("Method not implemented.");
    }

}