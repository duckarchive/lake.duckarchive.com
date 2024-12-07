// get every file in the directory src/content/posts
// find and replace "/../src/assets/images../../assets/images" with "../../assets/images"
// save files
// exit with success code

import { readdirSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";

const POSTS_DIR = "src/content/posts";
const files = readdirSync(POSTS_DIR);

files.forEach((file) => {
  const filePath = join(POSTS_DIR, file);
  const content = readFileSync(filePath, { encoding: "utf-8" })
    .replace("/../src/assets/images../../assets/images", "../../assets/images");
  writeFileSync(filePath, content);
});

process.exit(0);
