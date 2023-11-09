const unsortedArray = [3, 7, 1, 4, 8, 2, 6, 5];

function mergeSort(unsortedArray) {
    if (unsortedArray.length < 2) {
        return unsortedArray;
    }
    let midpoint = Math.floor(unsortedArray.length / 2);
    let leftHalf = unsortedArray.slice(0, midpoint);
    let rightHalf = unsortedArray.slice(midpoint);

    return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}

function merge(leftHalf, rightHalf) {
    const sortedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftHalf.length && rightIndex < rightHalf.length) {
        if (leftHalf[leftIndex] < rightHalf[rightIndex]) {
            sortedArray.push(leftHalf[leftIndex]);
            leftIndex++;
        } else {
            sortedArray.push(rightHalf[rightIndex]);
            rightIndex++;
        }
    }
    return [...sortedArray, ...leftHalf.slice(leftIndex), ...rightHalf.slice(rightIndex)];
}

console.log(mergeSort(unsortedArray));
