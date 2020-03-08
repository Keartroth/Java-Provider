export const equipment = (equipmentObject) => {
    return `
    <section class="equipment wheatBackground" id="equipment--${equipmentObject.id}">
        <h4>${equipmentObject.model}</h4>
        <h6><span class="bold">SN</span>:${equipmentObject.serialNumber}</h6>
        <p><span class="bold">Functioning</span>: ${equipmentObject.isFunctional ? `🟢` : `🟥`}   <span class="bold">Under Warranty</span>: ${equipmentObject.isUnderWarranty ? `✔` : `❌`}</p>
    </section>
    `
}