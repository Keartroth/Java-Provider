export const product = (productObject) => {
    return`
    <section id="product--${productObject.id}" class="product wheatBackground">
        <h4>${productObject.name}</h4>
        <h6>COOL: ${productObject.beanType}</h6>
        <p><span class="bold">Roast</span>: ${productObject.roastType}    <span class="bold">Price</span>: $${productObject.price}</p>
    </section>
    `
}