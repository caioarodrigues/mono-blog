import { Request, Response } from 'express';
import { FinalUser, User } from '../types/UserType';
import { Feed } from '../types/FeedType';

export default class FeedController {
    private feed?: Feed;

    constructor(user: User){
        //gotta add a logic for this later 
    }

    async generate(req: Request, res: Response){}
    async clear(req: Request, res: Response){}
}