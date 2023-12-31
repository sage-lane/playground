import employees from "./employeeDb.json";
import salary from "./salaryDb.json";

const mayFail = () => {
  const prob = Math.random();
  if (prob > 0.5) {
    throw Error("Could not process request");
  }
};

const employeeDb = new Promise((resolve, _) => {
  setTimeout(() => {
    resolve(employees);
  }, 500);
});

const salaryDb = new Promise((resolve, _) => {
  setTimeout(() => {
    resolve(salary);
  }, 500);
});

const getEmployees = async () => {
  mayFail();
  return employeeDb;
};

const getSalaries = async () => {
  mayFail();
  return salaryDb;
};

export { getEmployees, getSalaries };
