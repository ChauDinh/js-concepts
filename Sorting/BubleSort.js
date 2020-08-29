var BubbleSort = function (array) {
    if (array.length === 0 || array.length === 1)
        return array;
    for (var i = 0; i < array.length - 1; i++) {
        for (var j = array.length - 1; j >= i + 1; j--) {
            if (array[j - 1] > array[j]) {
                var tmp = array[j];
                array[j] = array[j - 1];
                array[j - 1] = tmp;
            }
        }
    }
    return array;
};
console.log(BubbleSort([1, 2, -4, 3, 0, 20, 15]));
