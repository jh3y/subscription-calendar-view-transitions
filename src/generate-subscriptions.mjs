import { promises as fs } from "fs";
import { getRandom, months, products } from "./utils/utils.js";

const subs = {};

for (let i = 0; i < months.length; i++) {
  const month = months[i];
  subs[month] = [];

  for (const product of products) {
    if (Math.random() > 0.25) {
      const sub = {
        product,
        amount: getRandom(10, 30).toFixed(2),
        totalAmount: (getRandom(10, 30) * getRandom(10, 12)).toFixed(2),
      };
      subs[month].push(sub);
    }
  }
}

await fs.writeFile(
  `${process.cwd()}/src/data/subs.json`,
  JSON.stringify(subs, undefined, 2),
  "utf-8",
);
