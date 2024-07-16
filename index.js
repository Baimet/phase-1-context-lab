// helpers.js

// Function to create an employee record
function createEmployeeRecord(employeeArray) {
  return {
    firstName: employeeArray[0],
    familyName: employeeArray[1],
    title: employeeArray[2],
    payPerHour: employeeArray[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
}

// Function to create multiple employee records from an array of arrays
function createEmployeeRecords(employeesArray) {
  return employeesArray.map(createEmployeeRecord);
}

// Function to create a timeIn event for an employee
function createTimeInEvent(dateTimeString) {
  let [date, hour] = dateTimeString.split(" ");
  this.timeInEvents.push({
    type: "TimeIn",
    date: date,
    hour: parseInt(hour, 10),
  });
  return this;
}

// Function to create a timeOut event for an employee
function createTimeOutEvent(dateTimeString) {
  let [date, hour] = dateTimeString.split(" ");
  this.timeOutEvents.push({
    type: "TimeOut",
    date: date,
    hour: parseInt(hour, 10),
  });
  return this;
}

// Function to calculate hours worked on a specific date
function hoursWorkedOnDate(date) {
  let timeIn = this.timeInEvents.find((event) => event.date === date);
  let timeOut = this.timeOutEvents.find((event) => event.date === date);
  return (timeOut.hour - timeIn.hour) / 100;
}

// Function to calculate wages earned on a specific date
function wagesEarnedOnDate(date) {
  let hoursWorked = hoursWorkedOnDate.call(this, date);
  return hoursWorked * this.payPerHour;
}

// Function to calculate total wages for all dates worked
function allWagesFor() {
  let datesWorked = this.timeInEvents.map((event) => event.date);
  let totalWages = datesWorked.reduce(
    (total, date) => total + wagesEarnedOnDate.call(this, date),
    0
  );
  return totalWages;
}

// Function to find an employee by first name in a collection
function findEmployeeByFirstName(collection, firstNameString) {
  return collection.find((employee) => employee.firstName === firstNameString);
}

// Function to calculate total payroll for all employees
function calculatePayroll(employees) {
  return employees.reduce((totalPayroll, employee) => {
    return totalPayroll + allWagesFor.call(employee);
  }, 0);
}
