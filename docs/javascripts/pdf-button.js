// convert-md-to-pdf.js

const markdownpdf = require("markdown-pdf");
const path = require("path");
const fs = require("fs");

const inputPath = process.argv[2];
const outputPath = path.basename(inputPath, path.extname(inputPath)) + ".pdf";

if (!fs.existsSync(inputPath)) {
    console.error("El archivo de entrada no existe.");
    process.exit(1);
}

markdownpdf()
    .from(inputPath)
    .to(outputPath, function () {
        console.log("Conversión completada: " + outputPath);
    });
