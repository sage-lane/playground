// Adapted from https://blog.logrocket.com/how-to-set-up-node-typescript-express/
import express, { Express, Request, Response } from "express";
import { getEmployees, getSalaries } from "./utils";

// Goal: Create an api for HR to use to manage company employees.

const app: Express = express();
const port = 5000;

type SalariedEmployee = {
  fullName: string;
  salary: number;
};

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
  async (req: Request<{}, {}, SalariedEmployee>, res: Response) => {}
);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
