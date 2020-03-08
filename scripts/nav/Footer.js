import { yearEstablished } from "./YearEstablished.js";
import { businessName } from "./BusinessName.js";
import { contactList } from "./contact/ContactList.js";

const contentTargetElement = document.querySelector("#javaFooter");

export const footer = () => {
    const contactListHTML = contactList();
    const businessNameHTML = businessName();
    const yearEstablishedHTML = yearEstablished();
    contentTargetElement.innerHTML =`
        ${contactListHTML}
        ${businessNameHTML}
        ${yearEstablishedHTML}
    `
}