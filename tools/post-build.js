const fs = require("fs");

fs.writeFileSync("dist/index.d.ts", 'export * from "./components;"');
fs.writeFileSync("dist/typings.d.ts", 'declare module "components-react";');