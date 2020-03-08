export const employee = (employeeObect) => {
    return `
    <section id="employee--${employeeObect.id}" class="employee wheatBackground">
        <h4>${employeeObect.firstName} ${employeeObect.lastName}</h4>
        <p><span class="bold">Title</span>: ${employeeObect.jobTitle}</br><span class="bold">Hours Scheduled</span>: ${employeeObect.hoursScheduled}</p>
    </section>
    `
}