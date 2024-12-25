// import express dan routing
import express from "express";
import router from "./routes/api.js";

// Membuat object express
const app = express();

// Menggunakan middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Menggunakan routing (router)
app.use(router);

// Mendefinisikan port.
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

import students from './data/students.js';
console.log(students);