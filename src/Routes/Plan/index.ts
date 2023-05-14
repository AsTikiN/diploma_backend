import { Request, Response, Router } from "express";
import Plan from "../../models/Plan";
import { PlanTypes } from "../../models/Plan/types";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const { name, price, description, features } = req.body;
    const plan = await Plan.create({ name, price, description, features });
    res.status(201).json(plan);
  } catch (e) {
    return res.status(500).send(e);
  }
});

router.get("/getAll", async (req: Request, res: Response) => {
  try {
    const type = req.query.type;

    if (typeof type !== "string" || !Object.values(PlanTypes).includes(type as PlanTypes))
      return res.status(400).send("only 'yearly' and 'monthly' are valid values for type");

    const plans = await Plan.find();
    res.status(201).json(plans);
  } catch (e) {
    return res.status(500).send(e);
  }
});

export default router;
