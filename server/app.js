import express from 'express';
import Journal from './models/Schema.js';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import cookieParser from 'cookie-parser';
import {authMiddleware, checkUser} from './middleware/authMiddleware.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(authRoutes);
app.use(authMiddleware);

app.get("*", checkUser);
app.post('*', checkUser);
app.get("/journals", async (req, res) => {
    try {
      const journals = await Journal.find({ userId: req.user });
      res.json(journals);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
app.post("/journals", async (req, res) => {
    try {
      const newJournal = new Journal(
        {
          userId: req.user,
          title: req.body.title,
          content: req.body.content,
        });
      
      const savedJournal = await newJournal.save();
      res.status(201).json(savedJournal);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });


app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});