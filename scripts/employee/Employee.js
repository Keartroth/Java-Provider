export const employee = (employeeObect) => {
    let employeeHoursWorked = `${employeeObect.hoursScheduled}` - `${employeeObect.hoursWorked}`;
    return `
    <section id="employee--${employeeObect.id}" class="employee wheatBackground">
        <h4>${employeeObect.firstName} ${employeeObect.lastName}</h4>
        <p><span class="bold">Title</span>: ${employeeObect.jobTitle}</br><span class="bold">Hours Scheduled</span>: ${employeeObect.hoursScheduled}
        </br><span class="bold">Hours Remaining</span>: ${employeeHoursWorked}</p>
    </section>
    `
}