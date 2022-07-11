import { Request, Response } from 'express';
import { CreateUserUseCase } from '../useCases/CreateUserUseCase';
import { handleUseCaseError } from '../handlers/handleUseCaseError';

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
