import { Request, Response, Router } from "express";
import Niche from "../../models/Niche";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const niche = await Niche.create({ name });
    res.status(201).json(niche);
  } catch (e) {
    return res.status(500).send(e);
  }
});

router.get("/getAll", async (req: Request, res: Response) => {
  try {
    const niches = await Niche.find();
    res.status(201).json(niches);
  } catch (e) {
    return res.status(500).send(e);
  }
});

export default router;
