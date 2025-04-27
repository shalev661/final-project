const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { OpenAI } = require('openai');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post('/check-message', async (req, res) => {
  const { message } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "אתה מזהה אם הודעה בצ'אט היא פוגענית. תגיב רק עם true או false." },
        { role: "user", content: `האם ההודעה הבאה פוגענית? "${message}"` }
      ],
      model: "gpt-3.5-turbo",
    });

    const response = completion.choices[0].message.content.trim().toLowerCase();
    const isOffensive = response.includes("true");

    res.json({ offensive: isOffensive });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "בעיה עם החיבור ל-GPT" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server is running on port ${PORT}`));
