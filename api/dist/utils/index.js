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
const employeeFn = () => {
    const prob = Math.random();
    if (prob > 0.75) {
        throw Error("Could not process request");
    }
    return employeeDb_json_1.default;
};
const salaryFn = () => {
    const prob = Math.random();
    if (prob > 0.9) {
        throw Error("Could not process request");
    }
    return salaryDb_json_1.default;
};
const employeeDb = new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            resolve(employeeFn());
        }
        catch (_a) {
            reject();
        }
    }, 500);
});
const salaryDb = new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            resolve(salaryFn());
        }
        catch (_a) {
            reject();
        }
    }, 500);
});
const getEmployees = () => __awaiter(void 0, void 0, void 0, function* () { return employeeDb; });
exports.getEmployees = getEmployees;
const getSalaries = () => __awaiter(void 0, void 0, void 0, function* () { return salaryDb; });
exports.getSalaries = getSalaries;
