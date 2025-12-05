// index.js
const app = require('./src/app');
const port = process.env.PORT || 5000;

// If run directly (node index.js), start the server.
// If required by a serverless platform (like Vercel) this file will be imported
// and we should not call app.listen(). Exporting the Express `app` works because
// an Express app is a valid request handler.
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
  });
}

module.exports = app;