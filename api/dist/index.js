"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Adapted from https://blog.logrocket.com/how-to-set-up-node-typescript-express/
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
// Goal: Create an api for HR to use to manage company employees.
const app = (0, express_1.default)();
const jsonParser = body_parser_1.default.json();
const port = 5000;
// Task -
// Salary data is stored separately from employee data (employeeDb & salaryDb).
// As efficiently as you can, create an endpoint which fulfills the following requirements:
//   1) Receives an array of employee IDs to process.
//   2) Uses this array to query both the employeeDb and the salaryDB and pull relevant data as efficiently as possible.
//   3) Merges this data into a single array and returns it in the form {id, fullName, salary }
//   4) For portability, dynamically generate and console.log() an SQL string using the IDs submitted in the post request
//      that will select all ids with a salary greater than 75k and cast the salary to the appropriate numeric value as a new column.
app.get("/", jsonParser, (req, res) => __awaiter(void 0, void 0, void 0, function* () { }));
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
