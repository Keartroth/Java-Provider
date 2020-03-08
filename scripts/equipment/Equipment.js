export const equipment = (equipmentObject) => {
    return `
    <section class="equipment wheatBackground" id="equipment--${equipmentObject.id}">
        <h4>${equipmentObject.model}</h4>
        <h6>${equipmentObject.serialNumber}</h6>
        <p>Functionality: ${equipmentObject.isFunctional ? `✔` : `‼`}   Under Warranty: ${equipmentObject.isUnderWarranty ? `✅` : `❌`}</p>
    </section>
    `
}