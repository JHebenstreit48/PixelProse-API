import express from 'express';
import NotesModel from '@/models/notes';

const router = express.Router();

const fetchNote = async (req: express.Request, res: express.Response) => {
  const rawPath = req.params.wildPath;

  try {
    const note = await NotesModel.findOne({ path: rawPath });

    if (!note) {
      console.warn(`[404] Note not found for path "${rawPath}"`);
      res.status(404).send('Note not found');
      return;
    }

    res.send(note.content);
  } catch (error) {
    console.error('[ERROR] Failed to fetch note by path:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};

// ✅ No overload issue
router.get('/:wildPath(*)', (req, res) => {
    console.log(`🛑 HIT /api/Notes/${req.params.wildPath}`); // <-- PROOF!
  void fetchNote(req, res); // ensures return type is void
});

export default router;
