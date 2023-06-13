import employees from "./employeeDb.json";
import salary from "./salaryDb.json";

const employeeFn = () => {
  const prob = Math.random();
  if (prob > 0.75) {
    throw Error("Could not process request");
  }
  return employees;
};

const salaryFn = () => {
  const prob = Math.random();
  if (prob > 0.9) {
    throw Error("Could not process request");
  }
  return salary;
};

const employeeDb = new Promise((resolve, reject) => {
  setTimeout(() => {
    try {
      resolve(employeeFn());
    } catch {
      reject();
    }
  }, 500);
});

const salaryDb = new Promise((resolve, reject) => {
  setTimeout(() => {
    try {
      resolve(salaryFn());
    } catch {
      reject();
    }
  }, 500);
});

const getEmployees = async () => employeeDb;
const getSalaries = async () => salaryDb;

export { getEmployees, getSalaries };
