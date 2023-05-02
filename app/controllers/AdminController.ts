import { Request, Response } from 'express';
import { FinalUser } from '../types/UserType';
import User from '../models/User';

export default class AdminController {
    private finalUser: FinalUser;

    constructor(finalUser: FinalUser){
        this.finalUser = User.createUser(finalUser);
    }

    async create(req: Request, res: Response){}
    async delete(req: Request, res: Response){}
    async update(req: Request, res: Response){}
    async search(req: Request, res: Response){}
    async ban(req: Request, res: Response){}
    async unban(req: Request, res: Response){}
}