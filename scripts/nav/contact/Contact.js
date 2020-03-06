export const contactInformation = (contactObject) => {
    return`
    <p>
        ${contactObject.infoType}: ${contactObject.info}
    </p>
    `
}