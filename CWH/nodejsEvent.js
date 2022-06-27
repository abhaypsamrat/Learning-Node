const EventEmitter = require("node:events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on("Waterfull", () => {
  console.log("Please, turn off the moter");

  setTimeout(() => {
    console.log("plaese turn off the moter , its a genetal remainder");
  }, 3000);
});

console.log("The script is running");

myEmitter.emit("Waterfull");
