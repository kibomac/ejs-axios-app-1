import express from 'express';
import { setRoutes } from './routes/index.js';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3002;

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(), 'src', 'views'));

// Middleware to serve static files
app.use(express.static(path.join(process.cwd(), 'public')));

// Set up routes
setRoutes(app);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});