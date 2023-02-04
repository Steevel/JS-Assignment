// Write a functions which checks if all items are unique in the array.

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 12]
const arr2 = [1, 2, 3, 4, 4, 6, 7, 8]

function uniqueElements(arr) {
    if (arr.length !== new Set(arr).size) {
        return false
    }
    return true
}

console.log(uniqueElements(arr1));
console.log(uniqueElements(arr2));