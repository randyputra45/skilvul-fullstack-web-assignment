const express = require("express");

const app = express();
const port = 3000;

let hewan = [
  { id: 1, nama: "Snowy", spesies: "kucing" },
  { id: 2, nama: "Blacki", spesies: "anjing" },
  { id: 3, nama: "Molly", spesies: "kucing" },
  { id: 4, nama: "Milo", spesies: "kelinci" },
  { id: 5, nama: "Rere", spesies: "kucing" },
];

// Middleware
app.use(express.json());

app.use(function (req, res, next) {
  res.status(200);
  console.log("This is logger");
  next();
});

const postChecker = function (req, res, next) {
  const species = req.body.spesies;

  if (
    species === "kucing" ||
    species === "anjing" ||
    species === "kelinci"
  ) {
    res.status(200);
    next();
  } else {
    next(
      res.status(400).send({
        error: "species not valid",
      })
    );
  }
};

app.get("/hewan", (req, res) => {
  res.status(200).send(hewan);
});

app.get("/hewan/:id", (req, res) => {
  const hewanID = req.params.id;

  const findHewan = hewan.filter(
    (find) => find.id == hewanID
  );
  if (findHewan.length !== 0) {
    res.status(200).send(findHewan);
  } else {
    res.status(404).send({ message: "Pet not found" });
  }
});

app.post("/hewan", postChecker, (req, res) => {
  const body = req.body;

  const newHewan = {
    id: hewan.length + 1,
    nama: body["nama"],
    spesies: body["spesies"],
  };

  hewan.push(newHewan);

  res.status(201);
  res.send({
    message: "success adding one pets",
    hewan: hewan,
  });
});

app.put("/hewan/:id", (req, res) => {
  const hewanID = req.params.id;
  const { nama, spesies } = req.body;

  let updateHewan = hewan.find(
    (item) => item.id == hewanID
  );

  updateHewan.nama = nama;
  updateHewan.spesies = spesies;

  res.status(201);
  res.send({
    message: `success update by id: ${hewanID}`,
    hewan: hewan,
  });
});

app.delete("/hewan/:id", (req, res) => {
  const hewanID = req.params.id;
  let hewanIndex = hewan.findIndex(
    (item) => item.id == hewanID
  );

  hewan.splice(hewanIndex, 1);

  res.status(201);
  res.send({
    message: `success delete by id: ${hewanID}`,
    hewan: hewan,
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
