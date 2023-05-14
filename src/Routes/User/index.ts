import { Request, Response, Router } from "express";
import User from "../../models/User";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const { plan } = req.body;
    const user = await User.create({ plan });
    res.status(201).json(user);
  } catch (e) {
    return res.status(500).send(e);
  }
});

router.get("/getAll", async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.status(201).json(users);
  } catch (e) {
    return res.status(500).send(e);
  }
});

export default router;
