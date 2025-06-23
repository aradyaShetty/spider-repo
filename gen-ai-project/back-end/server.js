const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { GoogleGenAI } = require('@google/genai');

const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());

// Hardcoded API key — for local development only
const genAI = new GoogleGenAI({
  apiKey: "AIzaSyDV3eTml5e3RedDS4318BFdWoolNnIsArQ",
  vertexai: false
});

app.post('/generate', async (req, res) => {
  const prompt = req.body.prompt;

  try {
    const response = await genAI.models.generateContent({
      model: 'gemini-1.5-flash',
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
    });

    const text = response.candidates?.[0]?.content?.parts?.[0]?.text || 'No response';
    res.json({ response: text });
  } catch (error) {
    console.error('Gemini API Error:', error);
    res.status(500).json({ error: 'Failed to generate response' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
