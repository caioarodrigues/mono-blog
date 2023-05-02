import UserAbstract from '../abstract-classes/UserAbstract';
import { FinalUser } from '../types/UserType';

export default class User extends UserAbstract{
    private constructor(user: FinalUser) {
        super(user);
    }

    public static createUser(user: FinalUser): User{
        return new User(user);
    }
}