import { Request, Response } from 'express';
import { handleUseCaseError } from '../handlers/handleUseCaseError';
import { CreateUserUseCase } from '../useCases/CreateUserUseCase';

class UserController {
  async post(req: Request, res: Response) {
    try {
      const { name, email, password, avatar_url } = req.body;

      const createUserUseCase = new CreateUserUseCase();
      const user = await createUserUseCase.execute({
        name,
        email,
        password,
        avatar_url,
      });

      return res.json(user);
    } catch (error: any) {
      handleUseCaseError(error, req, res);
    }
  }
}

export { UserController };
