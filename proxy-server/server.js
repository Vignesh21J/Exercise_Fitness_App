const path = require('path');
const envPath = path.resolve(__dirname, '.env');
console.log('[DEBUG] ENV path =', envPath);

require('dotenv').config({ path: envPath });

console.log('[DEBUG] Key =', process.env.RAPIDAPI_KEY);

const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api/image/:id', async (req, res) => {
  const { id } = req.params;
  const { resolution } = req.query;

  try {
    const response = await axios.get('https://exercisedb.p.rapidapi.com/image', {
      responseType: 'stream',
      headers: {
        'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      },
      params: {
        exerciseId: id,
        resolution: resolution || '180',
      },
    });

    res.setHeader('Content-Type', 'image/gif');
    response.data.pipe(res);
  } catch (error) {
    console.error('Image fetch error:', error.response?.data || error.message);
    res.status(500).send('Failed to fetch image');
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
