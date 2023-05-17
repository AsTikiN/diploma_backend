import { Request, Response, Router } from "express";
import Drive from "../../models/Drive";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const { price, date, distance, userId } = req.body;
    const driverId = null;
    const drive = await Drive.create({ price, date, distance, driverId, userId });
    return res.status(200).send(drive);
  } catch (e) {
    return res.status(500).send(e);
  }
});

router.get("/all", async (req: Request, res: Response) => {
  try {
    const drives = await Drive.find();
    return res.status(200).send(drives);
  } catch (e) {
    return res.status(500).send(e);
  }
});

router.get("/free", async (req: Request, res: Response) => {
  try {
    const drives = await Drive.find({ driverId: null });
    return res.status(200).send(drives);
  } catch (e) {
    return res.status(500).send(e);
  }
});

// router.delete("/", async (req: Request, res: Response) => {
//   try {
//     const { price, date, distance, userId } = req.body;
//     const drive = await Drive.create({ price, date, distance, driverId, userId });
//     return res.status(200).send(drive);
//   } catch (e) {
//     return res.status(500).send(e);
//   }
// });

router.put("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { price, date, distance, driverId, userId } = req.body;
    const drive = await Drive.findByIdAndUpdate(id, { driverId }, { new: true });
    return res.status(200).send(drive);
  } catch (e) {
    return res.status(500).send(e);
  }
});

export default router;
