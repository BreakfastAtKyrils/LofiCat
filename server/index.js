const Pool = require("pg").Pool;
const pool = new Pool({
  user: "loficat",
  host: "localhost",
  database: "loficat",
  password: "finals",
  port: 5432,
});

const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const port = 3006;

app.get("/", async (req, res) => {
  const books = await pool.query(`Select * FROM books;`);
  console.log(books);
  res.json({ books: books.rows[0] });
});

app.get("/chapters/:id", async (req, res) => {
  const book_id = req.params.id;

  const content = await pool.query(
    `Select content FROM chapters WHERE book_id = ${book_id}`
  );
  res.json(content.rows[0].content);
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
