export const employee = (employeeObect) => {
    return `
    <section id="employee--${employeeObect.id}" class="employee">
        <h4>${employeeObect.firstName} ${employeeObect.lastName}</h4>
        <p>Title: ${employeeObect.jobTitle}</br>Hours Scheduled: ${employeeObect.hoursScheduled}</p>
    </section>
    `
}