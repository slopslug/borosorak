import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";

const app = express();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(
      import.meta.dirname,
      "uploads",
    );
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath);
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(
      null,
      `${Date.now()}-${file.originalname}`,
    );
  },
});

const upload = multer({ storage });

app.use(express.json());

app.post(
  "/upload",
  upload.single("file"),
  (req, res) => {
    if (!req.file) {
      return res
        .status(400)
        .json({ error: "No file uploaded" });
    } else if (
      !req.file.mimetype.startsWith("image")
    ) {
      return res.status(400).json({
        error: "only img allowed",
      });
    }
    res.json({
      message: "File uploaded successfully",
      file: req.file,
    });
  },
);

app.get("/files", (req, res) => {
  const uploadPath = path.join(
    __dirname,
    "uploads",
  );
  fs.readdir(uploadPath, (err, files) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "Unable to read files" });
    }
    res.json({ files });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(
    `Server is running on port ${PORT}`,
  );
});
