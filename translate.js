import axios from "axios";
import chalk from "chalk";
import APIKey from "./apiKey.js";
import { startApp } from "./app.js";

export default function translateTheWord(data) {
  const encodedParams = new URLSearchParams();
  encodedParams.set("q", data);
  encodedParams.set("target", "uk");
  encodedParams.set("source", "en");

  const options = {
    method: "POST",
    url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "Accept-Encoding": "application/gzip",
      "X-RapidAPI-Key": APIKey,
      "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
    },
    data: encodedParams,
  };
  async function requestToAPI() {
    try {
      await axios
        .request(options)
        .then((res) =>
          console.log(
            chalk.blue(
              "\n" + res.data.data.translations[0].translatedText + "\n"
            )
          )
        );
      startApp();
    } catch (error) {
      console.error(error);
    }
  }

  requestToAPI();
}
