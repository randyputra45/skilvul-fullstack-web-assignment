// Import module dan inisialisasi port
const express = require("express");
const app = express();
const port = 3004;
const { Hewan } = require("./models/index");
app.use(express.json())

// Step 1: Import sequelize
const Sequelize = require("sequelize");

// Step 2: Membuat var yang didalamnya terdapat fungsi konfigurasi sequelize
const sequelize = new Sequelize(
  "express_sequelize",
  "root",
  "",
  {
    host: "localhost",
    dialect: "mysql",
  }
);

// Step 3: Membuat fungsi untuk check koneksi project ke database
function checkConnection() {
  sequelize
    .authenticate()
    .then(() => {
      console.log(
        "Connection has been established successfully"
      );
    })
    .then(() => {
      Hewan.sync().then(() => {
        console.log("Table Hewan created");
      });
    })
    .catch((err) => {
      console.error("Unable to connect to database: ", err);
    });
}

// Step 4: Panggil fungsi connection
checkConnection();

app.get("/hewan", (req, res) => {
  // findAll untuk mendapatkan/mencari semua data dalam table
  Hewan.findAll({
    raw: true,
  })
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((error) => res.send(error));
});

app.get("/hewan/:id", (req, res) => {
  // With Sequelize v5, findById() was replaced by findByPk()
  Hewan.findByPk(req.params.id)
    .then((result) => {
      console.log(result);
      res.status(200).send(result);
    })
    .catch((error) => res.send(error));
});

app.post("/hewan", async (req, res) => {
  const body = req.body;
  const hewan = {
    nama: body["nama"],
    namaSpesies: body["namaSpesies"],
    umur: body["umur"]
  };
  try {
    await Hewan.create(hewan);
    res.status(200).send(hewan);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

app.put("/hewan/:id", async (req, res) => {
  try {
    const todoId = req.params.id;
    const body = req.body;
    const hewan = {
      nama: body["nama"],
      namaSpesies: body["namaSpesies"],
      umur: body["umur"],
    };
    await Hewan.update(hewan, {
      where: {
        id: todoId,
      },
    });
    res.status(200).send(hewan);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

app.delete("/hewan/:id", async (req, res) => {
  try {
    const todoId = req.params.id;

    await Hewan.destroy({
      where: {
        id: todoId,
      },
    });
    res.status(200).json({
      message: "Hewan was deleted successfully",
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

app.listen(port, () => {
  console.log("Running on port 3004");
});
