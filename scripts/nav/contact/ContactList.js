import { useContactInfo } from "./contactDataProvider.js";
import { contactInformation } from "./Contact.js";

export const contactList = () => {
    const arrayOfContactInformation = useContactInfo();
    let allContactsHTML = "";

    for (const contactObject of arrayOfContactInformation) {
        allContactsHTML += contactInformation(contactObject);
    }
    return allContactsHTML;
}