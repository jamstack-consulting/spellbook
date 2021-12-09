import glob from "fast-glob";
import fs, { promises } from "fs";
import path from "path";

// POSTS_PATH is useful when you want to get the path to a specific file
export const PAGES_PATH = "mdx/pages";

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const createFilePaths = (filePath) =>
  glob
    .sync(`${filePath}/**/*.mdx`)
    .map((file) => file.replace(`${filePath}/`, ""))
    .map((file) => file.replace(new RegExp(path.extname(file) + "$"), ""));
// Only include md(x) files
// .filter((path) => /\.mdx?$/.test(path));

export const createFilePath = (filePath) => promises.readFile(filePath);

// Only include md(x) files

export const pageFilePaths = createFilePaths(PAGES_PATH);
