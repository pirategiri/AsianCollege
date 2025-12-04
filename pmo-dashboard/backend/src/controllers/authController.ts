import { Request, Response } from 'express';
import authService from '../services/authService';

class AuthController {
  public async register(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      const user = await authService.register(email, password);
      res.status(201).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error registering user.');
    }
  }

  public async login(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      const { user, token } = await authService.login(email, password);
      res.status(200).json({ user, token });
    } catch (error) {
      console.error(error);
      res.status(401).send('Invalid credentials.');
    }
  }
}

export default new AuthController();
