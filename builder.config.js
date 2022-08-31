var fs = require("fs");
const path = require("path");
const dirs = ["/scripts", "/styles"];
const build_dirs = ["/build/script.js", "/build/style.css"];

build_dirs.forEach((dir) => {
  fs.writeFileSync(path.join(__dirname, dir), "");
  console.log("cleaning up...");
});

dirs.forEach((dir, index) => {
  let data = fs.readFileSync(path.join(__dirname, dir + "/main"));
  data = data.toString().split("/");
  data.forEach((file) => {
    let file_data = fs.readFileSync(path.join(__dirname, dir + "/" + file));
    fs.appendFileSync(
      path.join(__dirname, build_dirs[index]),
      file_data.toString()
    );
  });
  console.log("build success 🎉");
});
