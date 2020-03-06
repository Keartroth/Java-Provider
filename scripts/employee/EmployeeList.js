import { useEmployee } from "./employeeDataProvider.js";
import { employee } from "./Employee.js";

const contentElement = document.querySelector(".employees");

export const employeeList = () => {
    const arrayOfEmployeeObjects = useEmployee();

    for (const employeeObject of arrayOfEmployeeObjects) {
        contentElement.innerHTML += employee(employeeObject);
    }
}