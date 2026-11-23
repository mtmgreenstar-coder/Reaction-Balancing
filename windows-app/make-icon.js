const fs = require("fs");
const path = require("path");
const pngToIco = require("png-to-ico");

async function main() {
  const source = path.join(__dirname, "build", "icon.png");
  const target = path.join(__dirname, "build", "icon.ico");
  if (!fs.existsSync(source)) throw new Error("Missing build/icon.png");
  const ico = await pngToIco(source);
  fs.writeFileSync(target, ico);
  console.log("Windows icon created:", target);
}
main().catch(error => { console.error(error); process.exit(1); });
