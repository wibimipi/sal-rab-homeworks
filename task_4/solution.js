// Задание 4.1. Вывод карточек товаров

function parseProducts(json) {
    const data = JSON.parse(json)
    return data.products
}

function renderProductsCards(json) {
    clearProducts()
    const products = parseProducts(json)
    for (const product of products) {
        addProduct(product)
    }
}

