import { Request, Response, Router } from "express";
import Book from "../../models/Book";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const { name, words, voiceTone, niche, chapters } = req.body;
    const book = await Book.create({ name, niche, words, voiceTone, chapters });
    res.status(201).json(book);
  } catch (e) {
    return res.status(500).send(e);
  }
});

router.get("/getAll", async (req: Request, res: Response) => {
  try {
    const books = await Book.find();
    res.status(201).json(books);
  } catch (e) {
    return res.status(500).send(e);
  }
});

router.get("/:bookId", async (req: Request, res: Response) => {
  try {
    const bookId = req.params.bookId;
    const books = await Book.findById(bookId);
    res.status(201).json(books);
  } catch (e) {
    return res.status(500).send(e);
  }
});

router.put("/:bookId", async (req: Request, res: Response) => {
  try {
    const book = req.body;
    const bookId = req.params.bookId;

    const updatedBook = await Book.findByIdAndUpdate(bookId, book, { new: true });
    res.status(201).json(updatedBook);
  } catch (e) {
    return res.status(500).send(e);
  }
});

router.put("/:bookId/:chapterId", async (req: Request, res: Response) => {
  try {
    const { title, content } = req.body;
    const bookId = req.params.bookId;
    const chapterId = req.params.chapterId;
    if (!bookId || !chapterId) {
      res.status(400).json();
    }
    const book = await Book.updateOne(
      { _id: bookId, chapters: { $elemMatch: { _id: chapterId } } },
      { $set: { "chapters.$": { title, content } } },
    );
    res.status(201).json(book);
  } catch (e) {
    return res.status(500).send(e);
  }
});

router.delete("/:bookId/:chapterId", async (req: Request, res: Response) => {
  try {
    const _id = req.params.bookId;
    const chapterId = req.params.chapterId;

    const book = await Book.updateOne(
      {
        _id,
      },
      {
        $pull: { chapters: { _id: chapterId } },
      },
    );
    res.status(201).json(book);
  } catch (e) {
    return res.status(500).send(e);
  }
});

router.delete("/:bookId", async (req: Request, res: Response) => {
  try {
    const _id = req.params.bookId;

    const book = await Book.findByIdAndDelete(_id);
    res.status(201).json(book);
  } catch (e) {
    return res.status(500).send(e);
  }
});

export default router;
