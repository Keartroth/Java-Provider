import { businessName } from "./BusinessName.js"

let targetContentElement = document.querySelector("#company");

export const header = () => {
    const businessNameHTML = businessName();
    targetContentElement.innerHTML =`
    <img src="https://i.pinimg.com/236x/f3/80/5c/f3805cbb9c45c2ad8e12fea81af79f29.jpg" alt="java logo" />   ${businessNameHTML}
    `
    return targetContentElement;
}