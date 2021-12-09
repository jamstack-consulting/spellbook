import fs from "fs";
import path from "path";

// POSTS_PATH is useful when you want to get the path to a specific file
export const PAGES_PATH = "mdx/pages";

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const createFilePaths = (filePath) =>
  fs
    .readdirSync(path.join(process.cwd(), filePath))
    // Only include md(x) files
    .filter((path) => /\.mdx?$/.test(path));

export const pageFilePaths = createFilePaths(PAGES_PATH);
