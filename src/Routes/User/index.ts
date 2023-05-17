import { Request, Response, Router } from "express";
import User from "../../models/User";
import { UserRights } from "../../models/User/types";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const { name, email, password, rights } = req.body;
    if (!Object.values(UserRights).includes(rights)) return res.status(400).send("Invalid rights!");

    await User.create({ name, email, password, rights });
    res.status(201).json("User successfully registered!");
  } catch (e) {
    return res.status(500).send(e);
  }
});

router.get("/:email/:password", async (req: Request, res: Response) => {
  try {
    const email: any = req.params.email;
    const password: any = req.params.password;
    if (!email || !password) return res.status(400).send("Email and passoword should be entered!");
    const user = await User.findOne({ email, password });
    if (!user) return res.status(400).send("Incorrect email or passoword");
    res.status(201).json({ isAuthorized: true, rights: user.rights });
  } catch (e) {
    return res.status(500).send(e);
  }
});

// router.put("/:bookId", async (req: Request, res: Response) => {
//   try {
//     const book = req.body;
//     const bookId = req.params.bookId;

//     const updatedBook = await Book.findByIdAndUpdate(bookId, book, { new: true });
//     res.status(201).json(updatedBook);
//   } catch (e) {
//     return res.status(500).send(e);
//   }
// });

// router.put("/:bookId/:chapterId", async (req: Request, res: Response) => {
//   try {
//     const { title, content } = req.body;
//     const bookId = req.params.bookId;
//     const chapterId = req.params.chapterId;
//     if (!bookId || !chapterId) {
//       res.status(400).json();
//     }
//     const book = await Book.updateOne(
//       { _id: bookId, chapters: { $elemMatch: { _id: chapterId } } },
//       { $set: { "chapters.$": { title, content } } },
//     );
//     res.status(201).json(book);
//   } catch (e) {
//     return res.status(500).send(e);
//   }
// });

// router.delete("/:bookId/:chapterId", async (req: Request, res: Response) => {
//   try {
//     const _id = req.params.bookId;
//     const chapterId = req.params.chapterId;

//     const book = await Book.updateOne(
//       {
//         _id,
//       },
//       {
//         $pull: { chapters: { _id: chapterId } },
//       },
//     );
//     res.status(201).json(book);
//   } catch (e) {
//     return res.status(500).send(e);
//   }
// });

// router.delete("/:bookId", async (req: Request, res: Response) => {
//   try {
//     const _id = req.params.bookId;

//     const book = await Book.findByIdAndDelete(_id);
//     res.status(201).json(book);
//   } catch (e) {
//     return res.status(500).send(e);
//   }
// });

export default router;
