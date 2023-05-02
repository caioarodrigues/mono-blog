import IAdmin from "../interfaces/IAdmin";
import { Post } from "../types/PostType";
import { FinalUser, User } from "../types/UserType";

export default abstract class Admin implements IAdmin{
    normalUser: User;
    password: string;
    age: number;
    posts?: Post[];
    following?: User[]
    followers?: User[];

    protected constructor(user: FinalUser) {
        const { normalUser, password, age } = user;
        this.normalUser = normalUser;
        this.password = password;
        this.age = age;
        this.posts = [];
        this.followers = [];
        this.following = [];
    }
    banUser(user: User): void {
        throw new Error("Method not implemented.");
    }
    unbanUser(user: User): void {
        throw new Error("Method not implemented.");
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