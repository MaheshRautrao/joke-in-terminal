#! /usr/bin/env node
import {
  spinner,
  multiselect,
  select,
  confirm,
  text,
  isCancel,
  cancel,
  intro,
  outro,
} from "@clack/prompts";

// Intro
console.log("\n");
intro(`Let me tell you a joke`);

main();

async function main() {
  let url = "https://v2.jokeapi.dev/joke/Any";

  const s = spinner();
  s.start("I am thinking.");

  let res;

  try {
    res = await fetch(url);
    res = await res.json();
  } catch {
    outro("something went wrong");
    process.exit();
  }

  s.stop("Here is a joke\n");

  if (res.type == "single") {
    console.log(res.joke + "\n");
  }
  if (res.type == "twopart") {
    console.log(res.setup + "\n");
    console.log(res.delivery + "\n");
  }
  console.log("😂 😂 😂 😂 \n");

  // outro
  outro(`Bye see you next time`);
}
