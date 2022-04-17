function addInCartMessage(title, price) {
    let productName = title;
    let productPrice = price;
    const message = productName + " за " + productPrice + " теперь в корзине!"
    console.log(message)

    return message;
}

function addInCartCountChange(value) {
    let oldValue = value;
    const newValue = oldValue + 1

    return newValue;
}

function addInCartSumChange(sum, delta) {
    let oldSum = sum;
    let difference = delta;
    const newSum = oldSum + difference
    const newSumText = `${newSum} ₽`

    return newSumText;
}

