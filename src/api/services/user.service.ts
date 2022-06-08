import { UserRequest } from '../model/user.interface'
import { GenericResponse } from '../interfaces/response.interface'
import { UserDAO } from '../integrations/db/DAO';
import { plainToClass } from 'class-transformer';
import { User } from '../integrations/db/entities';

class UserService {

  async createUser(
    newUser: UserRequest
  ): Promise<GenericResponse> {
    const genericResponse: GenericResponse = {}

    const setModelUser = plainToClass(User, newUser);

    try {
      const response = await UserDAO.save(setModelUser)
      genericResponse.data = response
    } catch (error) {
      genericResponse.error = {
        message: error.message,
        status: '500',
        system: 'ORCHESTRATOR ERROR'
      }
    }

    return genericResponse
  }
}

const userService = new UserService()
export default userService
