const express = require("express");
const cors = require("cors");
const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/run", (req, res) => {
  const { language, code } = req.body;
  const id = Date.now();
  let file, command;

  try {
    
  if (language === "cpp") {
  file = `temp${id}.cpp`;
  fs.writeFileSync(file, code);

  const exeFile = `temp${id}.exe`;
  command = `g++ ${file} -o ${exeFile} && ${exeFile}`;
}


    if (language === "python") {
      file = `temp${id}.py`;
      fs.writeFileSync(file, code);
      command = `python ${file}`;
    }

    if (language === "java") {
      file = `Main${id}.java`;
      fs.writeFileSync(file, code);
      command = `javac ${file} && java Main${id}`;
    }

    exec(command, (err, stdout, stderr) => {
      if (err) {
        return res.json({ output: stderr });
      }
      res.json({ output: stdout });
    });
  } catch (e) {
    res.json({ output: "Execution error" });
  }
});

app.listen(5000, () =>
  console.log("Compiler server running on port 5000")
);
