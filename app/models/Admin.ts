import AdminAbstract from '../abstract-classes/AdminAbstract';
import { FinalUser } from '../types/UserType';

export default class Admin extends AdminAbstract {
    private constructor(user: FinalUser) {
        super(user);
    }

    createAdmin(user: FinalUser): Admin{
        return new Admin(user);
    }
}