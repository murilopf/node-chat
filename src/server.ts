import express from "express"

import "./database";
import { routes } from './routes';

const app = express();

app.use(express.json())

app.use(routes);

app.listen(8000, () => console.log("Server ins running on port 8000..."))