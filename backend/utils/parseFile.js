import fs from "fs";
import csv from "csv-parser";
import xlsx from "xlsx";

export const parseFile = (filePath, type) => {

  type = type.toLowerCase();

  if (type === "csv") {
    return new Promise((resolve) => {
      const results = [];
      fs.createReadStream(filePath)
        .pipe(csv())
        .on("data", (data) => results.push(data))
        .on("end", () => resolve(results));
    });
  }

  if (type === "xlsx") {
    const workbook = xlsx.readFile(filePath);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    return xlsx.utils.sheet_to_json(sheet);
  }
};
