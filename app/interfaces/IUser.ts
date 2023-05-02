import { Post } from "../types/PostType";
import { FinalUser, User } from "../types/UserType";

export default interface IUser extends FinalUser{
    createPost(post: Post): void;
    deletePost(id: number): void;
    editPost(id: number): void;
    seePost(id: number): Post;
    comment(comment: string): void;
}