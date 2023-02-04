
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
console.log(shoppingCart)

// - add 'Meat' in the beginning of your shopping cart if it has not been already added
if (shoppingCart[0] !== "Meat") {
    shoppingCart.unshift("Meat")
}

console.log(shoppingCart)

// - add Sugar at the end of you shopping cart if it has not been already added
if (shoppingCart[-1] !== "Sugar") {
    shoppingCart.push("Sugar")
}

console.log(shoppingCart)

// - remove 'Honey' if you are allergic to honey
const indexOfHoney = shoppingCart.indexOf("Honey")
shoppingCart.splice(indexOfHoney, 1)

console.log(shoppingCart)

// modify Tea to 'Green Tea'
const indexOfTea = shoppingCart.indexOf("Tea")
shoppingCart.splice(indexOfTea, 1, "Green tea")

console.log(shoppingCart)
