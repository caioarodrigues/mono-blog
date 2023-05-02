import { Request, Response } from 'express';
import { FinalUser } from '../types/UserType';
import User from '../models/User';

export default class UserController {
    private finalUser: FinalUser;

    constructor(finalUser: FinalUser){
        this.finalUser = User.createUser(finalUser);
    }

    async create(req: Request, res: Response){}
    async delete(req: Request, res: Response){}
    async update(req: Request, res: Response){}
    async search(req: Request, res: Response){}
}