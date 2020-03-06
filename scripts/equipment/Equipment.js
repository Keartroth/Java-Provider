export const equipment = (equipmentObject) => {
    return `
    <section class="equipment" id="equipment--${equipmentObject.id}">
        <h4>${equipmentObject.model}</h4>
        <h6>${equipmentObject.serialNumber}</h6>
        <p>Functionality: ${equipmentObject.isFunctional}   Warranty: ${equipmentObject.isUnderWarranty}</p>
    </section>
    `
}