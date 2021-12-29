const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const coursesRoutes = require("./routes/courses.route");
const instructorsRoutes = require("./routes/instructors.route");
const participantsRoutes = require("./routes/participants.route")

const db = require("./helpers/db");

const port = process.env.PORT || 3000;
const uri = process.env.MONGO_URI;

async function main() {
  try {
    // memastikan database connect baru jalankan app
    // await db.openDBConnection(uri, dbOptions);
    await db.openDBConnection(uri);
    const app = express();

    app.use(express.json()); // agar kita bisa ambil reques body json
    app.use(coursesRoutes);
    app.use(instructorsRoutes);
    app.use(participantsRoutes);

    app.listen(port, () => {
      console.log("Server is running on port", port);
    });
  } catch (error) {
    console.log("main", error);
  }
}

main();
