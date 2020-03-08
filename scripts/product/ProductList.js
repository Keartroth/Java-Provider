import { useProducts } from "./productDataProvider.js";
import { product } from "./Product.js";

const contentElement = document.querySelector("#container--products");

export const productList = () => {
    const arrayOfProductObjects = useProducts();

    for (const productObject of arrayOfProductObjects) {
        contentElement.innerHTML += product(productObject);
    }
}