import path from 'path';
import express from 'express';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import App from './app.js';

const SERVER_PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'dist')));

app.disable('x-powered-by');

app.get('/*', (req, res) => {
  const context = {};

  const app = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  const html = `
    <!doctype html>
    <html>
      <head>
        <title>Technology MMXX</title>
      </head>
      <body>
        <div id="root">${app}</div>
        <script src="./client.js"></script>
      </body>
    </html>
  `;

  if (context.url) {
    res.writeHead(301, {
      Location: context.url,
    });
    res.end();
  } else {
    res.send(html);
  }
});

app.listen(SERVER_PORT, () => {
  console.log(`😎 Listening on port ${SERVER_PORT}`);
});
