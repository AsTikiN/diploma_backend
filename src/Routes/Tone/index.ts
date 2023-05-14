import { Request, Response, Router } from "express";
import Tone from "../../models/Tone";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const tone = await Tone.create({ name });
    res.status(201).json(tone);
  } catch (e) {
    return res.status(500).send(e);
  }
});

router.get("/getAll", async (req: Request, res: Response) => {
  try {
    const tones = await Tone.find();
    res.status(201).json(tones);
  } catch (e) {
    return res.status(500).send(e);
  }
});

export default router;
