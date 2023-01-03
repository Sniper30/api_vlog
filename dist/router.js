import { Router } from "express";
import { dirname, join } from "path";
import fs from "fs";
import * as url from "url";
const router = Router();
const _dirname = url.fileURLToPath(new URL(".", import.meta.url)); //this is the __dirname variable that comes include with commonJS 

fs.readdir(join(_dirname, "/routes"), (err, files) => {
  if (err) return console.error("hay un error: " + err);
  generateRoute(files);
});
function generateRoute(files) {
  files.forEach(async file => {
    const name = file.split(".")[0];
    const module = await import(join(_dirname + "./routes/" + file));
    router.use("/" + name, module.default);
  });
}
export default router;