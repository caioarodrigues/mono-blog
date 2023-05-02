import { User } from "./UserType"
import { Comment } from "./CommentType"
import { Content } from "./ContentType"

export type Post = {
    id: number;
    author: User;
    content: Content;
    comment?: Array<Comment>;
}