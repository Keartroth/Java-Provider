import { equipment } from "./Equipment.js";
import { useEquipment } from "./equipmentDataProvider.js";

const contentElement = document.querySelector("#container--equipment");

export const equipmentList = () => {
    const arrayOfEquipmentObjects = useEquipment();

    for (const equipmentObject of arrayOfEquipmentObjects) {
        contentElement.innerHTML += equipment(equipmentObject);        
    }
}