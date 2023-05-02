import { Request, Response } from 'express';
import { FinalUser, User } from '../types/UserType';
import { Post } from '../types/PostType';

export default class PostController {
    private post: Post;

    constructor(post: Post){
        //gotta add a logic for this later
        this.post = post; 
    }

    async submit(req: Request, res: Response){}
    async remove(req: Request, res: Response){}
    async edit(req: Request, res: Response){}
    async open(req: Request, res: Response){}
}