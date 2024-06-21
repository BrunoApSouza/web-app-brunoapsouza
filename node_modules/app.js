const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<img src="https://www.impacta.edu.br/themes/wc_agenciar3/images/banners/graduacao/2024/banner-desktop-vestibular-2024-1.png" alt="Banner">');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
