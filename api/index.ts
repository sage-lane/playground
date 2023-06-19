// Adapted from https://blog.logrocket.com/how-to-set-up-node-typescript-express/
import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import { getEmployees, getSalaries, getDepartments } from "./utils";
import cors from "cors";

// Goal: Create an api for HR to use to manage company employees.

// Express Server Config
const app: Express = express();
app.use(cors());

const port = 5000;
const jsonParser = bodyParser.json();

// Task -
// Salary data is stored separately from employee data (employeeDb & salaryDb).
// As efficiently as you can, create an endpoint which fulfills the following requirements:
//   1) Receives an array of employee IDs to process.
//   2) Uses this array to query both the employeeDb and the salaryDB and pull relevant data as efficiently as possible.
//   3) Merges this data into a single array and returns it in the form {id, fullName, salary }
//   4) For portability, dynamically generate and console.log() an SQL string using the IDs submitted in the post request
//      that will select all ids with a salary greater than 75k and cast the salary to the appropriate numeric value as a new column.
app.get(
  "/",
  jsonParser,
  async (req: Request<{}, {}, Array<number>>, res: Response) => {}
);

// This is for another exercise
app.get("/departments", async (req: Request, res: Response) => {
  try {
    const departments = await getDepartments();
    res.send(departments);
  } catch {
    res.sendStatus(500);
  }
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
