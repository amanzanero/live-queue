import express, { Express, Request, Response } from "express";
import clc from "cli-color";

import "./config";

const app: Express = express();
const notice = clc.green;
const statement = clc.blueBright;
const { PORT, NODE_ENV } = process.env;

if (NODE_ENV === "production") {
  app.use(express.static(__dirname + "/public"));
}

app.get("/", (_req: Request, res: Response) => {
  res.status(200).sendFile(__dirname + "/public/index.html");
});

if (NODE_ENV === "production")
  app.get("/helloworld", (_req: Request, res: Response) => {
    res.status(200).send("hi");
  });

app.listen(PORT, () => {
  console.log(
    notice(
      `
_ _                                                                            
| (_)_   _____        __ _ _   _  ___ _   _  ___   ___  ___ _ ____   _____ _ __ 
| | \\ \\ / / _ \\_____ / _\` | | | |/ _ \\ | | |/ _ \\ / __|/ _ \\ \'__\\ \\ / / _ \\ \'__|
| | |\\ V /  __/_____| (_| | |_| |  __/ |_| |  __/ \\__ \\  __/ |   \\ V /  __/ |   
|_|_| \\_/ \\___|      \\__, |\\__,_|\\___|\\__,_|\\___| |___/\\___|_|    \\_/ \\___|_|   
                        |_|                                                         

Author: Andrew Manzanero                                                                            
    `
    ),
    statement(`\n\nListening on port: ${PORT}`)
  );
});
