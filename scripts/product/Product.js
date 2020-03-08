export const product = (productObject) => {
    return`
    <section id="product--${productObject.id}" class="product wheatBackground">
        <h4>${productObject.name}</h4>
        <h6>${productObject.beanType}</h6>
        <p>Roast: ${productObject.roastType}    Price: $${productObject.price}</p>
    </section>
    `
}