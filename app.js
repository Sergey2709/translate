import chalk from "chalk";
import translateTheWord from "./translate.js";
import detectTheLang from "./detect.js";
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export function startApp() {
  rl.question(
    chalk.yellow(
      '\nWhat would you like to do? \n\nFor translate type "translate" \nFor detecting language type "detect" \nFor quite from this programm type "end" \n'
    ),
    (data) => {
      if (data === "translate") {
        rl.question(chalk.green("\nEnter your word for translating "), (data) =>
          translateTheWord(data)
        );
      } else if (data === "detect") {
        rl.question(
          chalk.green("\nEnter any word for detecting language "),
          (data) => detectTheLang(data)
        );
      } else if (data === "end") {
        rl.close();
      } else {
        console.log(chalk.red("\nI didn`t understand you choose again! \n"));
        startApp();
      }
    }
  );
}

startApp();
