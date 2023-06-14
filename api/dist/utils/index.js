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
exports.getSalaries = exports.getEmployees = void 0;
const employeeDb_json_1 = __importDefault(require("./employeeDb.json"));
const salaryDb_json_1 = __importDefault(require("./salaryDb.json"));
const mayFail = () => {
    const prob = Math.random();
    if (prob > 0.5) {
        throw Error("Could not process request");
    }
};
const employeeDb = new Promise((resolve, _) => {
    setTimeout(() => {
        resolve(employeeDb_json_1.default);
    }, 500);
});
const salaryDb = new Promise((resolve, _) => {
    setTimeout(() => {
        resolve(salaryDb_json_1.default);
    }, 500);
});
const getEmployees = () => __awaiter(void 0, void 0, void 0, function* () {
    mayFail();
    return employeeDb;
});
exports.getEmployees = getEmployees;
const getSalaries = () => __awaiter(void 0, void 0, void 0, function* () {
    mayFail();
    return salaryDb;
});
exports.getSalaries = getSalaries;
