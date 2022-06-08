import { User as UserDB } from '../entities/user';
import  AppDataSource  from '../ormConfig';
export class UserDAO {
   
  public static async save(data: UserDB) {
    return await AppDataSource.manager.save(data)
  }
}
